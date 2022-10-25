import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { MensajeConfirmacionComponent } from './shared/mensaje-confirmacion/mensaje-confirmacion.component';
//import { ListadoPeticionariosComponent } from './peticionario/listado-peticionarios/listado-peticionarios.component';

@NgModule({
  declarations: [
    AppComponent/*,
    MensajeConfirmacionComponent,
    ListadoPeticionariosComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
