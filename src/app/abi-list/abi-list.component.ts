import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { ChangeDetectorRef }        from '@angular/core';
import { NgZone }                   from '@angular/core';

import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';
import { Contract }                 from '../classes/Contract';

import { BigNumber }                from "bignumber.js";

@Component({
  selector: 'app-abi-list',
  templateUrl: './abi-list.component.html',
  styleUrls: ['./abi-list.component.css']
})
export class AbiListComponent implements OnInit {

  /* Objects */
  contract:Contract;
  stats:any = [];
  web3API:any;

  constructor(
        private dataService:DataService,
        private web3Service:Web3Service,
        private route:ActivatedRoute,
        private location:Location,
        private ref: ChangeDetectorRef,
        private _ngZone: NgZone) { }

  ngOnInit() {
    this.getData();
    this.initWeb3();
    this.getNoparamFunctions();
    this.callWeb3Functions();
  }

  getData():void{
    const contract_name:string = this.route.snapshot.paramMap.get('name');
    const contract:Contract = this.dataService.getContractByName(contract_name);
    this.contract = contract;
    console.log(this.contract);
  }

  initWeb3():void{
    var web3 = this.web3Service.getWeb3();
    var web3API = web3.eth.contract(this.contract.abi).at(this.contract.address);
    this.web3API = web3API;

    console.log(this.web3API);
  }

  getNoparamFunctions():void {
    for(var i = 0; i < this.contract.abi.length; i++){
      let elem:any = this.contract.abi[i];
      if(elem.inputs){
        if(elem.inputs.length == 0 && elem.constant) {
          if(elem.name) this.stats.push(elem);
        }
      }
    }
  }

  callWeb3Functions():void {
    var that = this;
    console.log(this.stats);
    for(let i = 0; i < this.stats.length; i++){
      let elem:any = this.stats[i];
      this.web3API[elem.name](function(err, res){
        var r;
        if(BigNumber.isBigNumber(res)) r = res.toNumber();
        else r = res;
        that.stats[i]["val"] = r;
        that._ngZone.run(() => {});
      });
    }
  }

  goBack():void{
    this.location.back();
  }



}
