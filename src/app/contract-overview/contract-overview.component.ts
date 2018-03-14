import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService }              from '../data.service';
import { Contract }                 from '../classes/Contract';
import { Project }                  from '../classes/Project';

@Component({
  selector: 'app-contract-overview',
  templateUrl: './contract-overview.component.html',
  styleUrls: ['./contract-overview.component.css']
})
export class ContractOverviewComponent implements OnInit {

  project:Project;
  contracts:Array<Contract>;

  constructor(
      private dataService:DataService,
      private route:ActivatedRoute,
      private location:Location) {}

  ngOnInit() {
    this.getContract();
  }

  getContract(){
    const projectName = this.route.snapshot.paramMap.get('projectName');
    this.project = this.dataService.getProjectByName(projectName);
    this.contracts = this.project.contracts;
  }


}
