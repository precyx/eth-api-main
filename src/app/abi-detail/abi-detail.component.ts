import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { FormControl, Validators }  from '@angular/forms';
import { ChangeDetectorRef }        from '@angular/core';
import { NgZone }                   from '@angular/core';

import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';
import { Contract }                 from '../classes/Contract';


@Component({
  selector: 'app-abi-detail',
  templateUrl: './abi-detail.component.html',
  styleUrls: ['./abi-detail.component.css']
})
export class AbiDetailComponent implements OnInit {
  abi_function:any;
  contract:Contract;
  web3API:any;

  /* ABI function call params */
  params:any = {};
  output:string;
  loading:boolean = false;

  /* material errors */
  requiredFormControl = new FormControl('', Validators.required);

  checkLoop:boolean = false;
  loopInterval:number = 500;

  constructor(
    private dataService:DataService,
    private web3Service:Web3Service,
    private route:ActivatedRoute,
    private location:Location,
    private ref: ChangeDetectorRef,
    private _ngZone: NgZone) {}

  ngOnInit() {
    this.getAbiFunction();
    this.initWeb3();
  }

  getAbiFunction():void{
    const contract_name:string = this.route.snapshot.paramMap.get('name');
    const abi_fn_id:number = +this.route.snapshot.paramMap.get('id');
    const contract:Contract = this.dataService.getContractByName(contract_name);
    this.contract = contract;
    const abiFunction:any = this.dataService.getAbiFunctionOfContract(contract, abi_fn_id);
    this.abi_function = abiFunction;
  }

  initWeb3():void{
    var web3 = this.web3Service.getWeb3();
    var web3API = web3.eth.contract(this.contract.abi).at(this.contract.address);
    this.web3API = web3API;
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  goBack():void{
    this.location.back();
  }

  /**
   * needs cleanup
   * [clickButton ]
   */
  clickButton():void {
    //this.output = "...";
    this.loading = true;
    console.log(this.abi_function);
    var API = this.web3API;
    var abi_function_name = this.abi_function.name;
    var params = Object.values(this.params);
    var that = this;
    var handlerFunction = function(err, res){
      if(err) console.log(err);
      else{
        var out = res;
        if(out.isBigNumber) out.toNumber();
        var t = new Date();
        var t2 = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2);
        that.output = (that.output + "\n" + out) + " : " + t2;
      }
      that.loading = false;
      that._ngZone.run(() => {
        setTimeout(function() {
          if(that.checkLoop) that.clickButton();
        }, that.loopInterval);
      });
    }
    params.push(handlerFunction);
    API[abi_function_name].apply(this, params);

  }

}