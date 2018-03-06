import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber }           from 'bignumber.js';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  transform(_val:any, key:string) {
    var val = _val;
    if(BigNumber.isBigNumber(val)) val.toNumber();
    if(key){
      if(key.indexOf("price") !== -1 ||
         key.indexOf("Price") !== -1 ||
         key.indexOf("PRICE") !== -1 ||
         key.indexOf("eth") !== -1 ||
         key.indexOf("Eth") !== -1 ||
         key.indexOf("ETH") !== -1) val = ((parseInt(val)/1000000000000000000).toFixed(3) + " ETH");
    }
    return val;
  }
}
