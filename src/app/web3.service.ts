import { Injectable } from '@angular/core';

declare let window: any;

@Injectable()
export class Web3Service {

  getWeb3():any {
    return window.web3;
  }

  public getCurrentAddress():string{
    var address = "";
    if(window.web3.eth.defaultAccount) address = window.web3.eth.defaultAccount;
    else{
      window.web3.eth.getAccounts(function(err, res){
        address = res[0];
      });
    }
    return address;
  }
}
