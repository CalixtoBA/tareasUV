import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss']
})
export class ListadoEmpleadosComponent implements OnInit {

  constructor( private servicioEmpleados:EmpleadoService ) {
    this.servicioEmpleados.get()
      .subscribe(empleado => {
        console.log(empleado);
    });
   }

  ngOnInit(): void {
  }

}
