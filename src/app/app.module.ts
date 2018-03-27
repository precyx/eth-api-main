import { BrowserModule }              from '@angular/platform-browser';

import { NgModule }                   from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { FormsModule }                from '@angular/forms';
import { MatInputModule }             from '@angular/material';

import { AppComponent }               from './app.component';

import { AppRoutingModule }           from './app-routing.module';

import { HeadbarComponent }           from './headbar/headbar.component';
import { KikoFormFieldComponent }     from './kiko-form-field/kiko-form-field.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { AbiOverviewComponent }       from './abi-overview/abi-overview.component';
import { AbiDetailComponent }         from './abi-detail/abi-detail.component';
import { AbiDetailEventComponent }    from './abi-detail-event/abi-detail-event.component';
import { AbiDetailFunctionComponent } from './abi-detail-function/abi-detail-function.component';
import { AbiListComponent }           from './abi-list/abi-list.component';
import { NewContractComponent }       from './new-contract/new-contract.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';
import { DebugComponent }             from './debug/debug.component';

import { DataService }                from './data.service';
import { Web3Service }                from './web3.service';

import { SafeUrlPipe }                from './shared/security/safe-url.pipe';
import { TimeagoService }             from './services/timeago.service';
import { KikoTitlebarComponent } from './kiko-titlebar/kiko-titlebar.component';
import { BlockExplorerComponent } from './block-explorer/block-explorer.component';









@NgModule({
  declarations: [
    AppComponent,
    AbiDetailComponent,
    AbiDetailEventComponent,
    AbiDetailFunctionComponent,
    AbiListComponent,
    HeadbarComponent,
    KikoFormFieldComponent,
    AbiOverviewComponent,
    ProjectOverviewComponent,
    NewContractComponent,
    ContractOverviewComponent,
    DebugComponent,
    SafeUrlPipe,
    KikoTitlebarComponent,
    BlockExplorerComponent
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
    Web3Service,
    TimeagoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
