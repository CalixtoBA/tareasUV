import { Component, OnInit } from '@angular/core';
import { PeticionarioService } from 'src/app/services/peticionario.service';

@Component({
  selector: 'app-listado-peticionarios',
  templateUrl: './listado-peticionarios.component.html',
  styleUrls: ['./listado-peticionarios.component.scss']
})
export class ListadoPeticionariosComponent implements OnInit {

  constructor( private servicioPeticionarios:PeticionarioService ) {
    this.servicioPeticionarios.get()
      .subscribe(peticionario => {
        console.log(peticionario);
    });
   }

  ngOnInit(): void {
  }

}
