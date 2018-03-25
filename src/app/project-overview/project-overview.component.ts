import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { Project }           from '../classes/Project';
import { Web3Service }       from '../web3.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects:Array<Project> = [];

  constructor(
    private dataService:DataService,
    private web3Service:Web3Service) {

  }

  ngOnInit() {
    this.getProjects();
    this.startBlockExplorer();
  }

  getProjects():void {
    this.projects = this.dataService.projects;
  }

  startBlockExplorer(){
    var web3API = this.web3Service.getWeb3();
    web3API.eth.getBlockNumber();

  }

}
