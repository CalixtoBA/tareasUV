import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'empleados',
    loadChildren: () =>
      import('./empleados/empleados.module')
      .then(m=>m.EmpleadosModule)
  },
  {
    path:'peticionarios',
    loadChildren: () =>
      import('./peticionarios/peticionarios.module')
      .then(m=>m.PeticionariosModule)
  },
  {
    path:'',
    redirectTo:'empleados',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
