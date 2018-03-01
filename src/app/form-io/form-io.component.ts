import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-io',
  templateUrl: './form-io.component.html',
  styleUrls: ['./form-io.component.css']
})
export class FormIoComponent implements OnInit {

  api:Object = {"constant":false,"inputs":[{"name":"_subtypeIndexToDeprecate","type":"uint8"}],"name":"deprecateDefenceSubtype","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"};

  constructor() { }

  ngOnInit() {
  }

}
