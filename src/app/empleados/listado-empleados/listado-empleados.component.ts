import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';


@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss']
})
export class ListadoEmpleadosComponent implements OnInit {

  Empleados: Empleado[]=[];
  columnsToDisplay = ['id','nombre','acciones'];

  constructor( private servicioEmpleados:EmpleadoService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog ) {
    /*this.servicioEmpleados.get()
      .subscribe(empleado => {
        console.log(empleado);
    });*/
   }

  ngOnInit(): void {
    this.cargaEmpleados();
  }

  cargaEmpleados(){
    this.servicioEmpleados.get().subscribe(response => {
      this.Empleados=response;
    });
  }

  eliminar(empleado:Empleado){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está segur@ que desea eliminar el emplead@ ${empleado.nombre}?`
      }
    });
  

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){

        this.servicioEmpleados.delete(empleado.id)
        .subscribe((response)=>{                      
          this.snackBar.open('¡El emplea@ fue eliminad@ con éxito!','',{
            duration:3000
          });
          this.cargaEmpleados();
        }) 
      }
    });
  }

}
