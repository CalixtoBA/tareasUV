import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeticionariosComponent } from './listado-peticionarios/listado-peticionarios.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoPeticionariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticionariosRoutingModule { }
