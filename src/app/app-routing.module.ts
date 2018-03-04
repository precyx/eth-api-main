import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { AbiOverviewComponent }       from './abi-overview/abi-overview.component';
import { AbiDetailComponent }         from './abi-detail/abi-detail.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: ContractOverviewComponent},
  {path: 'main/:name', component: AbiOverviewComponent},
  {path: 'main/:name/fn/:id', component: AbiDetailComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
