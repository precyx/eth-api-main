import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showNewContract:boolean = false;

  newContract():void{
    console.log("add new contract");
    this.showNewContract = true;
  }

  setShowNewContract = function(b:boolean){
    this.showNewContract = b;
  }
}
