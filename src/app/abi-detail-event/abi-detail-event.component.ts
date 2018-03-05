import { Component, OnInit, Input } from '@angular/core';
import { NgZone }                   from '@angular/core';

import { Contract }                 from '../classes/Contract';

@Component({
  selector: 'app-abi-detail-event',
  templateUrl: './abi-detail-event.component.html',
  styleUrls: ['./abi-detail-event.component.css']
})
export class AbiDetailEventComponent implements OnInit {

  /* Objects*/
  @Input() abi_function:any;
  @Input() contract:Contract;
  @Input() web3API:any;

  /* Event Data */
  eventData:any;


  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
    this.listenToEvents();
  }


  /**
   * Listen to Events
   * @refactoring
   */
   listenToEvents():void{
     if(!this.abi_function.type) return;
     if(this.abi_function.type != "event") return;
     //
     var that = this;
     var API = this.web3API;
     var abi_fn = this.abi_function.name;
     var Event = API[abi_fn]();
     console.log(Event);
     Event.watch(function(err, res){
       console.log("err, ", err);
       console.log("res, ", res);
       if(!err) that.parseEventResult(res);
     });
   }

   parseEventResult(res){
     var output = "";
     var t = new Date();
     var t2 = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2);
     output += res.event + "\n";
     output += res.transactionHash + "\n";
     output += t2 + "\n";
     this.eventData += (output + "\n\n");
     //
     this._ngZone.run(() => {});
   }

}
