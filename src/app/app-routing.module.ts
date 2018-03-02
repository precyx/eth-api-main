import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FormIoComponent }      from './form-io/form-io.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'detail/:id', component: FormIoComponent },
  {path: 'main', component: DashboardComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
