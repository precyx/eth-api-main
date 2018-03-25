import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { FormControl, Validators }  from '@angular/forms';
import { ChangeDetectorRef }        from '@angular/core';
import { NgZone }                   from '@angular/core';

import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';
import { Contract }                 from '../classes/Contract';
import { Project }                  from '../classes/Project';


@Component({
  selector: 'app-abi-detail',
  templateUrl: './abi-detail.component.html',
  styleUrls: ['./abi-detail.component.css']
})
export class AbiDetailComponent implements OnInit {
  /* Objects*/
  project:Project;
  contract:Contract;
  abi_function:any;
  web3API:any;


  constructor(
    private dataService:DataService,
    private web3Service:Web3Service,
    private route:ActivatedRoute,
    private location:Location,
    private ref: ChangeDetectorRef,
    private _ngZone: NgZone) {}

  ngOnInit() {
    this.getData();
    this.initWeb3();

    //this.testBlockLoop();
  }

  getData():void{
    const projectName:string  = this.route.snapshot.paramMap.get('projectName');
    const contractName:string = this.route.snapshot.paramMap.get('contractName');
    const abi_fn_id:number    = +this.route.snapshot.paramMap.get('abiID');
    const project:Project     = this.dataService.getProjectByName(projectName);
    this.project              = project;
    const contract:Contract   = this.dataService.getContractByName(project, contractName);
    this.contract             = contract;
    const abiFunction:any     = this.dataService.getAbiFunctionOfContract(contract, abi_fn_id);
    this.abi_function         = abiFunction;
  }

  initWeb3():void{
    var web3     = this.web3Service.getWeb3();
    var web3API  = new web3.eth.Contract(this.contract.abi, this.contract.address);
    this.web3API = web3API;
  }

  testBlockLoop():void{
    //console.log(this.web3API);
    var i = 500500;
    var max = i+150;
    var API = this.web3API;
    for(i; i<max; i++){
      API._eth.getBlock(i, function(error, block){
        if(!error){
          //console.log("block ",block);
          //console.log("nr ",block.number);
          //
          //console.log(block.transactions);
          for(var j=0; j < block.transactions;j++){
            var tx = block.transactions[j];
            console.log(tx);
            //API._eth.getTransaction(tx).then(console.log);
            API._eth.getTransaction(tx.toString(), function(err, res){
              console.log("err, ", err);
              console.log("res, ", res);
              console.log("eth: ", res.value.toNumber() /1000000000000000000 + " ETH");
            });
          }

        }
        else {
          console.error(error);
        }
      });
    }

    /*API._eth.getTransaction("0x1c5d8f00329379aacbd75dcdff230dce0a419900a19e5b31119f829bfeee4e57", function(err, res){
      console.log("err, ", err);
      console.log("res, ", res);
      console.log("eth: ", res.value.toNumber() /1000000000000000000 + " ETH");
    });*/
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  goBack():void{
    this.location.back();
  }


}
