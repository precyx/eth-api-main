import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  @Input() data:any;

  outputData:any;

  constructor() { }

  ngOnInit() {
    this.outputData = "debug output.";
    console.log(this.data);
  }

  parseArray(data:Array<any>):string {
    var output;
    for(var i=0; i<data.length;i++){
      output += this.parseData(data[i]) + "\n";
    }
    return output;
  }

  parseObject(data:object):string {
    var output;
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        output += key + ": " + this.parseData(data[key]) + "\n";
      }
    }
    return output;
  }

  parseData(data:any):string{
    if(data == null || typeof data == 'undefined') return data + "\n\n";
    if(data.constructor === Array) return this.parseArray(data) + "\n\n";
    if(typeof data === 'object') return this.parseObject(data) + "\n\n";
    return data + "\n\n";
  }

}
