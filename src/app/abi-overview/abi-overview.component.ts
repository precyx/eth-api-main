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

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
    private location:Location) { }

    ngOnInit() {
      this.getContract();
    }

    getContract(){
      var name = this.route.snapshot.paramMap.get('name');
      this.contract = this.dataService.getContractByName(name);
      this.contract_abi = this.contract.abi;
    }

    goBack():void{
      this.location.back();
    }

}
