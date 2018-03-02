import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService }              from '../data.service';
import { Web3Service }              from '../web3.service';

@Component({
  selector: 'app-form-io',
  templateUrl: './form-io.component.html',
  styleUrls: ['./form-io.component.css']
})
export class FormIoComponent implements OnInit {
  io:Object;
  CURRENT_CONTRACT:any;

  constructor(
    private dataService:DataService,
    private web3Service:Web3Service,
    private route:ActivatedRoute,
    private location:Location) {}

  ngOnInit() {
    this.getIO();

    var web3 = this.web3Service.getWeb3();
    console.log(this.web3Service);
    console.log(web3);

    this.CURRENT_CONTRACT = web3.eth.contract(this.dataService.etherbots_core_abi).at(this.dataService.contractAddress);
    console.log(this.CURRENT_CONTRACT);
  }

  getIO():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.io = this.dataService.getById(id);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }


  clickButton():void {
    /*var Contract = "get.Contract";
    var OutputDom = "get.Outputdom";
    Contract["functionName"](param1, param2, function(err, res){
      output("functionname ", err, res);
      var result = parseResult(res);
      OutputDom.val(result)
    });*/
  }

}
