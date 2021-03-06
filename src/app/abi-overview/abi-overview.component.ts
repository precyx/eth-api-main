import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';
import { Contract }          from '../classes/Contract';
import { Project }           from '../classes/Project';

@Component({
  selector: 'app-abi-overview',
  templateUrl: './abi-overview.component.html',
  styleUrls: ['./abi-overview.component.css']
})
export class AbiOverviewComponent implements OnInit {

  project:Project;
  contract:Contract;
  contract_abi:any;

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
      var projectName = this.route.snapshot.paramMap.get('projectName');
      var contractName = this.route.snapshot.paramMap.get('contractName');
      //
      this.project = this.dataService.getProjectByName(projectName);
      this.contract = this.dataService.getContractByName(this.project, contractName);
      // append ID for routing
      var c:any = this.contract.abi;
      for(var i = 0; i < c.length; i++){
        c[i].id = i;
      }
      this.contract_abi = c;
    }

    goBack():void{
      this.location.back();
    }




    /*
     * Filter functions
     */

     checkActiveFiler(filter:string):boolean{
       if(this.active_filter == filter) return true;
       else return false;
     }

    filterByAddress():void{
      this.active_filter = "address";
      this.getContractAbi();
      var filtered:Array<object> = [];
      for(var i = this.contract_abi.length-1; i>=0; i--){
        var elem:any = this.contract_abi[i];
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

    filterByToken():void{
      this.active_filter = "token";
      this.getContractAbi();
      var filtered:any = this.contract_abi.filter(
        elem => elem.name == "ownsAll" ||
                elem.name == "tokensOfOwner" ||
                elem.name == "owner" ||
                elem.name == "paused" ||
                elem.name == "totalSupply" ||
                elem.name == "ownsAll"
      );
      this.contract_abi = filtered;
    }

    filterByZero():void{
      this.active_filter = "";
      this.getContractAbi();
    }

    filterByEvent():void{
      this.active_filter = "event";
      this.getContractAbi();
      var filtered:Array<object> = this.contract_abi.filter(
        elem => elem.type == "event"
      )
      this.contract_abi = filtered;
    }

    filterByNonConstant():void {
      this.active_filter = "nonconstant";
      this.getContractAbi();
      var filtered:Array<object> = this.contract_abi.filter(
        elem => !elem.constant &&
                elem.type != "event"
      )
      this.contract_abi = filtered;
    }

    filterByConstant():void {
      this.active_filter = "constant";
      this.getContractAbi();
      var filtered:Array<object> = [];
      var filtered:Array<object> = this.contract_abi.filter(
        elem => elem.constant &&
                elem.inputs &&
                elem.inputs.length > 0
      );
      this.contract_abi = filtered;
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
