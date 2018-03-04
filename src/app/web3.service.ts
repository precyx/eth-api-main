import { Injectable } from '@angular/core';

declare let window: any;

@Injectable()
export class Web3Service {

  getWeb3():any {
    return window.web3;
  }
}
