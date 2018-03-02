import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-io',
  templateUrl: './form-io.component.html',
  styleUrls: ['./form-io.component.css']
})
export class FormIoComponent implements OnInit {
  @Input() formdata:Object;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
