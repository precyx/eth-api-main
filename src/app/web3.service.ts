import { Injectable } from '@angular/core';

@Injectable()
export class Web3Service {

  getWeb3():any {
    return window.web3;
  }
}
