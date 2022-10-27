import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { EmpleadoService } from './services/empleado.service';
import { PeticionarioService } from './services/peticionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tareasUV';

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  constructor(private breakpointObserver: BreakpointObserver/*private servicioEmpleados:EmpleadoService,
              private servicioPeticionarios:PeticionarioService*/){
    /*this.servicioEmpleados.get()
      .subscribe(empleado => {
        console.log(empleado);
    });

    this.servicioPeticionarios.get()
      .subscribe(peticionario => {
        console.log(peticionario);
    });*/
  }
}
