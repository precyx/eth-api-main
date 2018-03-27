import { Component, OnInit } from '@angular/core';

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
    web3.eth.getPastLogs({
      fromBlock: "0x1",
      toBlock: "latest",
      address: "0x643DA7ee3E3f66A2f67a8304FC1f0B4b8f338B45",
      topics: ["0x5c5d031e516d9090563edeff00a282dc4af39fa24f8f42a91e5d402ac4187c19"]
    }, function(a,b){ console.log("log",a,b)});
  }

  /**
   * [getRecentTransactions description]
   */
  getRecentTransactions():void{
    var that = this;
    //
    web3.eth.getBlockNumber().then(function(bnumber){
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
