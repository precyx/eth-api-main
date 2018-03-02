import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { DashboardComponent }         from './dashboard/dashboard.component';
import { FormIoComponent }            from './form-io/form-io.component';
import { FormIoListComponent }        from './form-io-list/form-io-list.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: ContractOverviewComponent},
  {path: 'main/:name', component: DashboardComponent},
  {path: 'main/:name/fn/:id', component: FormIoComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
