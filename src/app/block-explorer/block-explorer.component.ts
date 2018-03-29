import { Component, OnInit } from '@angular/core';

import { BigNumber }         from "bignumber.js";

declare var web3:any;


@Component({
  selector: 'app-block-explorer',
  templateUrl: './block-explorer.component.html',
  styleUrls: ['./block-explorer.component.css']
})
export class BlockExplorerComponent implements OnInit {

  block500:any;
  last10blocks:any;

  constructor() { }

  ngOnInit() {
  }



  /**
   * [getLogs description]
   */
  getLogs():void {
    var createauction = web3.utils.sha3('createAuction(address _nftAddress, uint256 _tokenId, uint256 _startingPrice, uint256 _endingPrice, uint256 _duration)');
    let sca = web3.utils.padLeft('0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d', 64);
    let topic = '0x' + web3.utils.padLeft(new BigNumber(0).toString(16), 64);
    web3.eth.getPastLogs({
      fromBlock:0,
      toBlock: 'latest',
      address: '0xabc',
      topics: [ null,'0x0000000000000000000000000000000000000000000000000000000000000025', null, null ]
    }, function(a,b){ console.log("log",a,b)});
  }

  /**
   * [getRecentTransactions description]
   */
  getRecentTransactions():void{
    var that = this;
    //
    web3.eth.getBlockNumber().then(function(bnumber){
    console.log(bnumber);
      var promises = [];
      console.log(bnumber);
      for(let i = bnumber-2; i < bnumber; i++){
        let p = new Promise(function(resolve, reject){
          web3.eth.getBlock(i).then(function(block){
            resolve(block);
          })
        });
        promises.push(p);
      }
      return Promise.all(promises).then(function(vals){
        return(vals);
      });
    }).then(function(blocks){
      for(let i = 0; i < blocks.length; i++){
        var block = blocks[i];
        for(let j = 0; j < block.transactions.length; j++){
          var transaction = block.transactions[j];
          web3.eth.getTransaction(transaction).then(function(transaction){
            console.log(transaction);
          });
        }

      }
    });
  }//end-getRecentTransactions

}
