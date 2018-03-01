import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormIoComponent } from './form-io/form-io.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { FormIoListComponent } from './form-io-list/form-io-list.component';
import { KikoFormFieldComponent } from './kiko-form-field/kiko-form-field.component';


@NgModule({
  declarations: [
    AppComponent,
    FormIoComponent,
    HeadbarComponent,
    FormIoListComponent,
    KikoFormFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
