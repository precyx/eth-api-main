import { Component, OnInit, Input } from '@angular/core';
import { ElementRef }               from '@angular/core';

@Component({
  selector: 'app-kiko-form-field',
  templateUrl: './kiko-form-field.component.html',
  styleUrls: ['./kiko-form-field.component.css']
})
export class KikoFormFieldComponent implements OnInit {
  @Input() id:string;
  @Input() label:string;
  @Input() value:string;
  @Input() disable:boolean;
  disable_text:string;
  active:string = "";

  constructor(private elemRef:ElementRef) { }

  isActive(val){
    if(val) return true;
    else return false;
  }

  onFocus($event){
    this.active = "active";
  }
  onFocusOut($event){
    this.active = "";
    if($event.target.value) this.active = "active";
  }
  ngOnInit() {
    if(this.disable) this.disable_text = "readonly";
    if(this.value) this.active = "active";
  }
}


/*
    $(".ck_input").each(function(){
      var $ck_input = $(this);
      if($(this).find(":input").val())            $(this).addClass("active");
      $(this).find(".btn.fullscreen").click(function(event) {
         $($ck_input).toggleClass("fullscreen");
      });
    });


    $(".ck_input > input").focusin(function(){
        if($(this).is('[readonly]')) return;
        $(this).parents(".ck_input").addClass("active");
    }).focusout(function(){
        if($(this).is('[readonly]')) return;
        if(!$(this).val()) $(this).parents(".ck_input").removeClass("active");
    });
*/
