import { Injectable } from '@angular/core';

@Injectable()
export class Web3Service {

  web3: any;

  constructor() {
    this.web3 = window.web3;
  }

  getWeb3():any {
    return this.web3;
  }
}
