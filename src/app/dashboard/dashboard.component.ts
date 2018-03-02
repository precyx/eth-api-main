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
  }

  public get getElems() {
     return this.data;
  }

}
