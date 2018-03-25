import { Component, OnInit, Input } from '@angular/core';
import { NgZone }                   from '@angular/core';

import { Contract }                 from '../classes/Contract';
import { Web3Service }              from '../web3.service';
import { DataService }              from '../data.service';

import { BigNumber }                from "bignumber.js";

@Component({
  selector: 'app-abi-detail-function',
  templateUrl: './abi-detail-function.component.html',
  styleUrls: ['./abi-detail-function.component.css']
})
export class AbiDetailFunctionComponent implements OnInit {

  /* Objects*/
  @Input() abi_function:any;
  @Input() contract:Contract;
  @Input() web3API:any;

  /* ABI function call params */
  params:any = {};
  output:string;
  loading:boolean = false;

  /* checkbot data */
  checkLoop:boolean = false;
  loopInterval:number = 500;

  /* specific data */
  AUCTION_FLAG:boolean = false;
  auctions:Array<any> = [];
  i_a:number = 0;
  i_b:number = 0;


  constructor(
    private _ngZone: NgZone,
    private web3Service:Web3Service,
    private dataService:DataService) { }

  ngOnInit() {
    if(this.abi_function.name == "getAuction" &&
       this.contract.address == "0x98ecf84ac50aa3c090f88b04676babc296d03527")
       {
         this.renderAuctionDisplay();
         this.AUCTION_FLAG = true;
       }
  }


  renderAuctionDisplay():void {
    var web4                 = this.web3Service.getWeb3();
    var etherbotsProject     = this.dataService.getProjectByName("etherbots");
    var etherbotsContract    = this.dataService.getContractByName(etherbotsProject, "eb-live-core");
    var etherbotsCoreAbi     = etherbotsContract.abi;
    var etherbotsCoreAddress = etherbotsContract.address;
    var web4API              = new web4.eth.Contract(etherbotsCoreAbi, etherbotsCoreAddress);
    //
    var that = this;
    //
    web4API.totalSupply(function(err, res){
      if(!err){
        var totalSupply = res.toNumber();
        for(var i = 0; i < totalSupply; i++){
          that.web3API.getAuction(i.toString(), function(err, res){
            if(!err){
              if(res[0] != "0x") {
                var auction = {
                  'partid' : that.i_a,
                  'address' : res[0],
                  'startprice' : (res[1].toNumber() / 1000000000000000000) + " ETH",
                  'endprice' : (res[2].toNumber() / 1000000000000000000) + " ETH"
                };
                that.auctions[that.i_a] = auction;
                that.interractWith_PartById(web4API, "getPartById", auction, that.i_a);
                that.i_a++;
              }
            }
          });

        }
      }
    });

  }


  interractWith_PartById(_contract, _fnName, _auction, _index):void{
    var that = this;
    _contract[_fnName](_index, function(err, res){
      that.auctions[that.i_b].partSubType = res[2].toNumber();
      that.auctions[that.i_b].rarity = res[3].toNumber();
      that.auctions[that.i_b].id3 = that.i_b;
      //console.log(that.auctions);
      that.i_b++;
      that._ngZone.run(() => {});
    });
  }

  /**
   * needs cleanup
   * [clickButton ]
   * @refactoring
   */
  clickButton():void {
    //this.output = "...";
    this.loading = true;
    console.log(this.abi_function);
    var API = this.web3API;
    var abi_function_name = this.abi_function.name;
    var params = Object.values(this.params);
    var that = this;

    //params.push(handlerFunction);
    API.methods[abi_function_name](+params).call(this.parseData);
  }

  parseData(err,res){
    console.log("err",err);
    console.log("res",res.length);
    if(err) console.log(err);
    else{
      var out:any = res;
      console.log(out);
      if(BigNumber.isBigNumber(out)) out.toNumber();
      if(out.constructor === Array) out = JSON.stringify(out);
      var t = new Date();
      var t2 = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2);
      this.output += "\n" + out + " : " + t2;
    }
    this.loading = false;
    var that = this;
    this._ngZone.run(() => {
      setTimeout(function() {
        if(that.checkLoop) that.clickButton();
      }, this.loopInterval);
    });
  }

}
