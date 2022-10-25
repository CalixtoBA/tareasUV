import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { AgregarEditarEmpleadosComponent } from './agregar-editar-empleados/agregar-editar-empleados.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoEmpleadosComponent,
    AgregarEditarEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
