import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoEmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
