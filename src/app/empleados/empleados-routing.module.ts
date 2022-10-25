import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarEmpleadosComponent } from './agregar-editar-empleados/agregar-editar-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoEmpleadosComponent
  },
  {
    path:':id',
    component: AgregarEditarEmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
