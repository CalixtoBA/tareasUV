import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'empleado',
    loadChildren: () =>
      import('./empleados/empleados.module')
      .then(m=>m.EmpleadosModule)
  },
  {
    path:'peticionario',
    loadChildren: () =>
      import('./peticionarios/peticionarios.module')
      .then(m=>m.PeticionariosModule)
  },
  {
    path:'',
    redirectTo:'empleado',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
