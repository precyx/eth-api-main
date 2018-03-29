import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { BlockExplorerComponent }     from './block-explorer/block-explorer.component';
import { AxieGeneLabComponent }       from './axie-gene-lab/axie-gene-lab.component';
import { ProjectOverviewComponent }   from './project-overview/project-overview.component';
import { AbiOverviewComponent }       from './abi-overview/abi-overview.component';
import { AbiDetailComponent }         from './abi-detail/abi-detail.component';
import { AbiListComponent }           from './abi-list/abi-list.component';
import { ContractOverviewComponent }  from './contract-overview/contract-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full' },
  {path: 'blockExplorer', component: BlockExplorerComponent},
  {path: 'axieGeneLab', component: AxieGeneLabComponent},
  {path: 'projects', component: ProjectOverviewComponent},
  {path: 'projects/:projectName', component: ContractOverviewComponent},
  {path: 'projects/:projectName/:contractName', component: AbiOverviewComponent},
  {path: 'projects/:projectName/:contractName/stats', component: AbiListComponent},
  {path: 'projects/:projectName/:contractName/user', component: AbiListComponent},
  {path: 'projects/:projectName/:contractName/fn/:abiID', component: AbiDetailComponent},
  {path: 'projects/:projectName/:contractName/fn/:abiID/block-explorer', component: AbiDetailComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
