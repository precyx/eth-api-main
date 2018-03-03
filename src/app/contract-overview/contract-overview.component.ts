import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService }              from '../data.service';
import { Contract }                 from '../classes/Contract';

@Component({
  selector: 'app-contract-overview',
  templateUrl: './contract-overview.component.html',
  styleUrls: ['./contract-overview.component.css']
})
export class ContractOverviewComponent implements OnInit {

  contracts:Array<Contract>;
  contract:Contract;

  constructor(
      private dataService:DataService,
      private route:ActivatedRoute,
      private location:Location) { }

  ngOnInit() {
    this.contracts = this.dataService.getContracts();
    this.getContract();
  }

  getContract(){
    const name = this.route.snapshot.paramMap.get('name');
    this.contract = this.dataService.getContractByName(name);
  }

}
