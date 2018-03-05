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
  /* Objects*/
  abi_function:any;
  contract:Contract;
  web3API:any;

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


}
