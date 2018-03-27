import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';
import { DataService } from '../data.service';
declare var web3:any;
declare var $:any;

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  currentAddress:string;

  constructor(
    private web3Service:Web3Service,
    private dataService:DataService
  ){}

  ngOnInit() {
    let that:any = this;
    this.web3Service.getCurrentAddress();
    web3.eth.getAccounts().then(function(res){
      that.currentAddress = res[0];
    });
  }

  toggleMenu(e):void{
    console.log(e);
    $(".menuicon").toggleClass("active");
  }

}
