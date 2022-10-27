import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistroComponent
  },
  {
    path:'empleados',
    loadChildren: () =>
      import('./empleados/empleados.module')
      .then(m=>m.EmpleadosModule),
      canActivate:[AuthGuard],
      canLoad:[AuthGuard]
  },
  {
    path:'peticionarios',
    loadChildren: () =>
      import('./peticionarios/peticionarios.module')
      .then(m=>m.PeticionariosModule),
      canActivate:[AuthGuard],
      canLoad:[AuthGuard]
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
