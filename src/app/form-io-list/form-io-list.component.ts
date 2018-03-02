import { Component, OnInit, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-form-io-list',
  templateUrl: './form-io-list.component.html',
  styleUrls: ['./form-io-list.component.css']
})
export class FormIoListComponent implements OnInit {

  data:Object = this.dataService.getData();
  start:number = 1;
  numElems:number = 3;

  constructor(
    private dataService:DataService,
    private changeDetectorRef:ChangeDetectorRef,
    private ngZone:NgZone,
    private applicationRef:ApplicationRef) {}

  ngOnInit() {
  }

  onPaginationChange(event){
    console.log(event);
    //this.changeDetectorRef.detectChanges();
    //this.ngZone.run(function(){});
    //this.applicationRef.tick();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  public get getElems() {
     this.data;
  }

  between(val, min, max){
    return val > min && val < max;
  }



}
