import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionariosRoutingModule } from './peticionarios-routing.module';
import { ListadoPeticionariosComponent } from './listado-peticionarios/listado-peticionarios.component';


@NgModule({
  declarations: [
    ListadoPeticionariosComponent
  ],
  imports: [
    CommonModule,
    PeticionariosRoutingModule
  ]
})
export class PeticionariosModule { }
