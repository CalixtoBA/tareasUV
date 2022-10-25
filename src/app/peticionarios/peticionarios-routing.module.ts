import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarPeticionariosComponent } from './agregar-editar-peticionarios/agregar-editar-peticionarios.component';
import { ListadoPeticionariosComponent } from './listado-peticionarios/listado-peticionarios.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoPeticionariosComponent
  },
  {
    path:':id',
    component: AgregarEditarPeticionariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticionariosRoutingModule { }
