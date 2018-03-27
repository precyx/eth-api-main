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
  outputs:Array<any> = [];
  loading:boolean = false;

  /* loop data */
  checkLoop:boolean = false;
  loopInterval:number = 500;

  /* batch data */
  checkBatch:boolean = false;
  batchStartVal:number;
  batchEndVal:number;

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
  }

  clickBatchRequest():void {
    this.loading = true;
    var API               = this.web3API;
    var abi_function_name = this.abi_function.name;
    var that = this;
    //
    this.batchStartVal;
    for(let i = this.batchStartVal; i <= this.batchEndVal; i++){
      API.methods[abi_function_name].apply(this, [i]).call().then(function(res){
        that.parseData.apply(that, [res, i]);
      });
    }
  }

  /**
   * needs cleanup
   * [clickButton ]
   * @refactoring
   */
  clickButton():void {
    //this.output = "...";
    this.loading = true;
    var API               = this.web3API;
    var abi_function_name = this.abi_function.name;
    var params            = Object.values(this.params);
    var that = this;
    // api call
    console.log(API.methods[abi_function_name]);
    API.methods[abi_function_name].apply(this, params).call().then(function(res){
      that.parseData.apply(that, [res, params[0]]);
    });

  }

  parseData(res, param1){
    console.log("res",param1);
    var out:any = res;
    if(BigNumber.isBigNumber(out)) out.toNumber();
    if(out.constructor === Array) out = JSON.stringify(out);
    if(out != null && typeof out === 'object') out = JSON.stringify(out);
    var output:any = {val:"", t:"", t1:""};
    output.val = out;
    output.t = new Date();
    output.t2 = ("0" + output.t.getHours()).slice(-2) + ":" + ("0" + output.t.getMinutes()).slice(-2) + ":" + ("0" + output.t.getSeconds()).slice(-2);
    output.param1 = param1;
    this.outputs.push(output);
    // handle loading
    this.loading = false;
    var that = this;
    this._ngZone.run(() => {
      setTimeout(function() {
        if(that.checkLoop) that.clickButton();
      }, this.loopInterval);
    });
  }
















  /*
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

  */

}
