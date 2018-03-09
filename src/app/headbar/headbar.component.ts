import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  currentAddress:string;

  constructor(private web3Service:Web3Service){}

  ngOnInit() {
    this.currentAddress = this.web3Service.getCurrentAddress();
  }

}
