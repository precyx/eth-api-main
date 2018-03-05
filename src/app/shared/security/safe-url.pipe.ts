import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber }           from 'bignumber.js';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  transform(val:any) {
    if(BigNumber.isBigNumber(val)) return val.toNumber();
    return val;
  }
}
