import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { ProjectOverviewComponent }   from './project-overview/project-overview.component';
import { AbiOverviewComponent }       from './abi-overview/abi-overview.component';
import { AbiDetailComponent }         from './abi-detail/abi-detail.component';
import { AbiListComponent }           from './abi-list/abi-list.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: ProjectOverviewComponent},
  {path: 'main/:projectName', component: ContractOverviewComponent},
  {path: 'main/:projectName/:contractName', component: AbiOverviewComponent},
  {path: 'main/:projectName/:contractName/stats', component: AbiListComponent},
  {path: 'main/:projectName/:contractName/user', component: AbiListComponent},
  {path: 'main/:projectName/:contractName/fn/:abiID', component: AbiDetailComponent},
  {path: 'main/:projectName/:contractName/fn/:abiID/block-explorer', component: AbiDetailComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
