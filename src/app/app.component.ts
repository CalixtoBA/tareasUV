import { Component } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';
import { PeticionarioService } from './services/peticionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tareasUV';
  
  constructor(private servicioEmpleados:EmpleadoService,
              private servicioPeticionarios:PeticionarioService){
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
