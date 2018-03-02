import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './app.component';
import { FormIoComponent }          from './form-io/form-io.component';
import { HeadbarComponent }         from './headbar/headbar.component';
import { FormIoListComponent }      from './form-io-list/form-io-list.component';
import { KikoFormFieldComponent }   from './kiko-form-field/kiko-form-field.component';

import { MatInputModule }           from '@angular/material';
import { DataService }              from './data.service';
import { AppRoutingModule }         from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FormIoComponent,
    HeadbarComponent,
    FormIoListComponent,
    KikoFormFieldComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
