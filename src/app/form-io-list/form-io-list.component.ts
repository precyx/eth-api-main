import { Component, OnInit }        from '@angular/core';
import { DataService }              from '../data.service';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-form-io-list',
  templateUrl: './form-io-list.component.html',
  styleUrls: ['./form-io-list.component.css']
})
export class FormIoListComponent implements OnInit {

  contract:Object;

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
    private location:Location) {}

  ngOnInit() {
    this.getContract();
  }

  getContract(){
    var name = +this.route.snapshot.paramMap.get('name');
    this.contract = this.dataService.getContractByName(name);
  }


}
