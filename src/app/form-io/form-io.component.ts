import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';
import { Contract }                 from '../classes/Contract';

@Component({
  selector: 'app-form-io',
  templateUrl: './form-io.component.html',
  styleUrls: ['./form-io.component.css']
})
export class FormIoComponent implements OnInit {
  abi_function:any;
  CURRENT_CONTRACT:Contract;

  constructor(
    private dataService:DataService,
    private web3Service:Web3Service,
    private route:ActivatedRoute,
    private location:Location) {}

  ngOnInit() {
    this.getAbiFunction();
    this.initWeb3();
  }

  getAbiFunction():void{
    const contract_name:string = this.route.snapshot.paramMap.get('name');
    const abi_fn_id:number = +this.route.snapshot.paramMap.get('id');
    const contract:Contract = this.dataService.getContractByName(contract_name);
    const abiFunction:any = this.dataService.getAbiFunctionOfContract(contract, abi_fn_id);
    this.abi_function = abiFunction;
  }

  initWeb3():void{
    //console.log(this.abi_function);
    const name = this.route.snapshot.paramMap.get('name');
    this.CURRENT_CONTRACT = this.dataService.getContractByName(name);
    //console.log(this.CURRENT_CONTRACT);
    /*var web3 = this.web3Service.getWeb3();
    console.log(this.web3Service);
    console.log(web3);

    this.CURRENT_CONTRACT = web3.eth.contract(this.dataService.etherbots_core_abi).at(this.dataService.contractAddress);
    //console.log(this.CURRENT_CONTRACT);*/
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  goBack():void{
    this.location.back();
  }


  clickButton():void {
    //console.log(CURRENT_CONTRACT);
    /*var Contract = "get.Contract";
    var OutputDom = "get.Outputdom";
    Contract["functionName"](param1, param2, function(err, res){
      output("functionname ", err, res);
      var result = parseResult(res);
      OutputDom.val(result)
    });*/
  }

}
