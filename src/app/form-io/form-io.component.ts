import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService }              from '../data.service';

@Component({
  selector: 'app-form-io',
  templateUrl: './form-io.component.html',
  styleUrls: ['./form-io.component.css']
})
export class FormIoComponent implements OnInit {
  io:Object;

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
    private location:Location) {}

  ngOnInit() {
    this.getIO();
  }

  getIO():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.io = this.dataService.getById(id);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
