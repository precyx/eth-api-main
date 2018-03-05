import { BrowserModule }              from '@angular/platform-browser';

import { NgModule }                   from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { FormsModule }                from '@angular/forms';
import { MatInputModule }             from '@angular/material';

import { AppComponent }               from './app.component';

import { AppRoutingModule }           from './app-routing.module';

import { HeadbarComponent }           from './headbar/headbar.component';
import { KikoFormFieldComponent }     from './kiko-form-field/kiko-form-field.component';
import { AbiOverviewComponent }       from './abi-overview/abi-overview.component';
import { AbiDetailComponent }         from './abi-detail/abi-detail.component';
import { AbiDetailEventComponent }    from './abi-detail-event/abi-detail-event.component';
import { AbiDetailFunctionComponent } from './abi-detail-function/abi-detail-function.component';
import { NewContractComponent }       from './new-contract/new-contract.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';


import { DataService }                from './data.service';
import { Web3Service }                from './web3.service';

import { SafeUrlPipe }                from './shared/security/safe-url.pipe';
import { CallbackPipe }               from './shared/pipes/callback.pipe';





@NgModule({
  declarations: [
    AppComponent,
    AbiDetailComponent,
    AbiDetailEventComponent,
    AbiDetailFunctionComponent,
    HeadbarComponent,
    KikoFormFieldComponent,
    AbiOverviewComponent,
    NewContractComponent,
    ContractOverviewComponent,
    SafeUrlPipe,
    CallbackPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [
    DataService,
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
