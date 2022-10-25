import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionariosRoutingModule } from './peticionarios-routing.module';
import { ListadoPeticionariosComponent } from './listado-peticionarios/listado-peticionarios.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarEditarPeticionariosComponent } from './agregar-editar-peticionarios/agregar-editar-peticionarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoPeticionariosComponent,
    AgregarEditarPeticionariosComponent
  ],
  imports: [
    CommonModule,
    PeticionariosRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class PeticionariosModule { }
