import { Component, OnInit, Input, Output, EventEmitter }      from '@angular/core';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {
  @Input() showNewContract:boolean;
  @Output() setShowNewContract: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  closeContract():void{
    console.log("close contract");
    this.setShowNewContract.emit(false);
  }

  createContract():void{

  }

}
