import { Component, OnInit, Input } from '@angular/core';
import { NgZone }                   from '@angular/core';

import { Contract }                 from '../classes/Contract';

import { BigNumber }                from "bignumber.js";

@Component({
  selector: 'app-abi-detail-function',
  templateUrl: './abi-detail-function.component.html',
  styleUrls: ['./abi-detail-function.component.css']
})
export class AbiDetailFunctionComponent implements OnInit {

  /* Objects*/
  @Input() abi_function:any;
  @Input() contract:Contract;
  @Input() web3API:any;

  /* ABI function call params */
  params:any = {};
  output:string;
  loading:boolean = false;

  /* checkbot data */
  checkLoop:boolean = false;
  loopInterval:number = 500;

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  /**
   * needs cleanup
   * [clickButton ]
   * @refactoring
   */
  clickButton():void {
    //this.output = "...";
    this.loading = true;
    console.log(this.abi_function);
    var API = this.web3API;
    var abi_function_name = this.abi_function.name;
    var params = Object.values(this.params);
    var that = this;
    var handlerFunction = function(err, res){
      if(err) console.log(err);
      else{
        var out:any = res;
        console.log(out);
        if(BigNumber.isBigNumber(out)) out.toNumber();
        if(out.constructor === Array) out = JSON.stringify(out);
        var t = new Date();
        var t2 = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2);
        that.output += "\n" + out + " : " + t2;
      }
      that.loading = false;
      that._ngZone.run(() => {
        setTimeout(function() {
          if(that.checkLoop) that.clickButton();
        }, that.loopInterval);
      });
    }
    params.push(handlerFunction);
    API[abi_function_name].apply(this, params);

  }

}
