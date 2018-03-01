import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-io-list',
  templateUrl: './form-io-list.component.html',
  styleUrls: ['./form-io-list.component.css']
})
export class FormIoListComponent implements OnInit {

  elems:Object = [
    {"constant":false,"inputs":[{"name":"_subtypeIndexToDeprecate","type":"uint8"}],"name":"deprecateDefenceSubtype","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getPartById","outputs":[{"name":"tokenId","type":"uint32"},{"name":"partType","type":"uint8"},{"name":"partSubType","type":"uint8"},{"name":"rarity","type":"uint8"},{"name":"element","type":"uint8"},{"name":"battlesLastDay","type":"uint32"},{"name":"experience","type":"uint32"},{"name":"forgeTime","type":"uint32"},{"name":"battlesLastReset","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"_partId","type":"uint256"},{"name":"_startPrice","type":"uint256"},{"name":"_endPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
