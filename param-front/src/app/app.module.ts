import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import { ParmeditComponent } from './Parametros/parmedit/parmedit.component';
import { ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import { FormsModule } from '@angular/forms';
import { ParametroService } from '../app/Service/parametro.service';
import { HttpClientModule } from '@angular/common/http';
import { ParmdelComponent } from './Parametros/parmdel/parmdel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParmlistComponent,
    ParmeditComponent,
    ParmaddComponent,
    ParmdelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ParametroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
