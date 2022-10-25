import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Peticionario } from 'src/app/models/peticionario.model';
import { PeticionarioService } from 'src/app/services/peticionario.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-peticionarios',
  templateUrl: './listado-peticionarios.component.html',
  styleUrls: ['./listado-peticionarios.component.scss']
})
export class ListadoPeticionariosComponent implements OnInit {

  Peticionarios: Peticionario[]=[];
  columnsToDisplay = ['id','nombre','acciones'];

  constructor( private servicioPeticionarios:PeticionarioService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog  ) {
    /*this.servicioPeticionarios.get()
      .subscribe(peticionario => {
        console.log(peticionario);
    });*/
   }

  ngOnInit(): void {
    this.cargaPeticionarios();
  }

  cargaPeticionarios(){
    this.servicioPeticionarios.get().subscribe(response => {
      this.Peticionarios=response;
    });
  }

  eliminar(peticionario:Peticionario){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está segur@ que desea eliminar al peticionario ${peticionario.nombre}?`
      }
    });
  

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){

        this.servicioPeticionarios.delete(peticionario.id)
        .subscribe((response)=>{                      
          this.snackBar.open('¡El peticionario fue eliminad@ con éxito!','',{
            duration:3000
          });
          this.cargaPeticionarios();
        }) 
      }
    });
  }

}
