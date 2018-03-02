import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  transform(str:string) {
    return str.replace(/[^\w\s]/gi, '').replace(/\s/g,'')
  }
}
