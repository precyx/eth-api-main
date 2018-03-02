import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:Object;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();

    // init web3
    /*web3 = new Web3();
    window.console.log(web3);
    //var web3 = new Web3(web3.currentProvider);
    this.contract = web3.eth.contract(dataService.etherbots_core_abi).at(dataService.contractAddress);*/
  }

  public get getElems() {
     return this.data;
  }

}
