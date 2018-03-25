import { Injectable } from '@angular/core';
declare var window:any;

@Injectable()
export class Web3Service {

  currentAddress:string = "";

  getWeb3():any {
    return window.web3;
  }

  getCurrentAddress():string{
    var that = this;
    return window.web3.eth.getAccounts(function(err, res){
      that.currentAddress = res[0];
    });
  }
}
