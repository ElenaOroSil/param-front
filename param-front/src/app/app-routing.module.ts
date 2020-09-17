import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import {ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import {ParmeditComponent } from './Parametros/parmedit/parmedit.component';

import { ListarprodComponent } from './Producto/listarprod/listarprod.component';

const routes: Routes = [
  {path:'listarparm', component:ParmlistComponent},
  {path:'addparm',component:ParmaddComponent},
  {path:'editparm',component:ParmeditComponent},

  {path:'listarprod', component:ListarprodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
