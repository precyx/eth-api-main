import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';
import { Contract }          from '../classes/Contract';

@Component({
  selector: 'app-abi-overview',
  templateUrl: './abi-overview.component.html',
  styleUrls: ['./abi-overview.component.css']
})
export class AbiOverviewComponent implements OnInit {

  contract:Contract;
  contract_abi:Array<object>;

  /* filters */
  active_filter:string = "";


  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
    private location:Location) { }

    ngOnInit() {
      this.getContractAbi();
    }

    getContractAbi(){
      var name = this.route.snapshot.paramMap.get('name');
      this.contract = this.dataService.getContractByName(name);
      this.contract_abi = this.contract.abi;
    }

    goBack():void{
      this.location.back();
    }

    /* Filter related stuff */

    filterByAddress(){
      this.active_filter = "address";
      //this.getContractAbi();
      var filtered:Array<object> = [];
      for(var i = this.contract_abi.length-1; i>=0; i--){
        var elem = this.contract_abi[i];
        //
        if(elem.type == "event") {continue;}
        if(elem.constant == false) {continue;}
        //
        if(!elem.inputs) {filtered.push(elem); continue}
        if(!elem.inputs.length) {filtered.push(elem); continue}
        if(elem.inputs[0].type == "address") {filtered.push(elem); continue}
        if(elem.inputs[0].type == "address") {filtered.push(elem); continue}
      }
      this.contract_abi = filtered;
    }

    filterByZero(){
      this.active_filter = "";
      this.getContractAbi();
    }

    checkActiveFiler(filter:string):boolean{
      if(this.active_filter == filter) return true;
      else return false;
    }

    /*filterAbiFunctions(abi_function:any) {
        if(abi_function.inputs){
          if(abi_function.inputs.length){
            if(abi_function.inputs[0].type){
              return abi_function.inputs[0].type =="address";
            }

          }
        }

    }*/


}
