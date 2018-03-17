import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ChangeDetectorRef }        from '@angular/core';
import { NgZone }                   from '@angular/core';

import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';
import { Contract }                 from '../classes/Contract';
import { Project }                 from '../classes/Project';

import { BigNumber }                from "bignumber.js";

@Component({
  selector: 'app-abi-list',
  templateUrl: './abi-list.component.html',
  styleUrls: ['./abi-list.component.css']
})
export class AbiListComponent implements OnInit {

  /* Objects */
  project:Project;
  contracts:Array<Contract>;
  contract:Contract;


  web3API:any;
  stats:any = [];
  userData:any = [];
  currentUserAddress:string;

  constructor(
        private dataService:DataService,
        private web3Service:Web3Service,
        private route:ActivatedRoute,
        private router:Router,
        private location:Location,
        private ref: ChangeDetectorRef,
        private _ngZone: NgZone) { }

  ngOnInit() {
    this.getData();
    this.initWeb3();
    //
    this.getConstants();
    this.parseConstants();
    //
    this.getUserData();
    this.parseUserData();
  }

  navigate(contract_name:string):void {
    this.router.navigateByUrl("/main")
    .then(()=>{this.router.navigateByUrl("/main/"+this.project.url+"/"+contract_name+"/stats")});
  }

  checkActiveContract(contract:Contract):boolean{
    return (this.contract == contract);
  }

  getData():void{
    const projectName:string = this.route.snapshot.paramMap.get('projectName');
    const contractName:string = this.route.snapshot.paramMap.get('contractName');
    this.project = this.dataService.getProjectByName(projectName);
    this.contracts = this.project.contracts;
    this.contract = this.dataService.getContractByName(this.project, contractName);
    this.currentUserAddress = this.web3Service.getCurrentAddress();
  }

  initWeb3():void{
    var web3 = this.web3Service.getWeb3();
    var web3API = web3.eth.contract(this.contract.abi).at(this.contract.address);
    this.web3API = web3API;
    console.log(this.web3API);
  }

  /**
   * filters contract abi and picks elems based on:
   * CONSTANT
   * NO INPUT PARAMS
   */
  getConstants():void {
    var abi:any = this.contract.abi;
    this.stats = abi.filter(
      elem => elem.constant &&
              elem.inputs.length == 0
    );
  }

  /**
   * filters contract abi and picks elems based on:
   * FIRST PARAM ADDRESS
   */
  getUserData():void {
    var abi:any = this.contract.abi;
    this.userData = abi.filter(
      elem => elem.inputs &&
              elem.inputs.length == 1 &&
              elem.inputs[0].type &&
              elem.inputs[0].type == "address" &&
              elem.type != "event" &&
              elem.constant
    );
    console.log("userdata: ",this.userData);
    for(let i = 0; i == 100; i ++){

    }
  }

  parseUserData():void {
    var that = this;
    for(let i = 0; i < this.userData.length; i++){
      this.web3API[this.userData[i].name](that.web3Service.getCurrentAddress(), function(err, res){
        that.userData[i]["val"] = that.formatData(res);
        that._ngZone.run(() => {});
      });
    }
  }

  parseConstants():void {
    var that = this;
    for(let i = 0; i < this.stats.length; i++){
      this.web3API[this.stats[i].name](function(err, res){
        that.stats[i]["val"] = that.formatData(res);
        that._ngZone.run(() => {});
      });
    }
  }



  formatData(_data:any):void {
    var output = _data;
    if(BigNumber.isBigNumber(_data)) output = _data.toNumber();
    return output;
  }

  goBack():void{
    this.location.back();
  }



}
