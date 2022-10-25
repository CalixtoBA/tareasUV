import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Peticionario } from 'src/app/models/peticionario.model';
import { PeticionarioService } from 'src/app/services/peticionario.service';

@Component({
  selector: 'app-agregar-editar-peticionarios',
  templateUrl: './agregar-editar-peticionarios.component.html',
  styleUrls: ['./agregar-editar-peticionarios.component.scss']
})
export class AgregarEditarPeticionariosComponent implements OnInit {
  formulario!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder,
    private servicioPeticionarios:PeticionarioService,
    private router:Router,
    private snackBar:MatSnackBar,
    private activatedRouter:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['', [Validators.required,Validators.minLength(5),Validators.maxLength(100)]  ],
    });
  
    this.id = this.activatedRouter.snapshot.params['id'] ?
              +this.activatedRouter.snapshot.params['id'] : 0;
  
    if(this.id!==0){
       this.llenarDatosPeticionarios(this.id);
    }
  }

  llenarDatosPeticionarios(id:number){
    this.servicioPeticionarios.getById(id)
        .subscribe((peticionario:Peticionario)=>{
          this.formulario.patchValue({
            ...peticionario
          })
    });
  }

  guardar(){
    const peticionario: Peticionario ={
      ...this.formulario.value
    };

    if(this.id===0){
      this.agregar(peticionario);
    }
    else{
      this.actualizar(peticionario);
    }
  }

  agregar(peticionario:Peticionario){
    this.servicioPeticionarios.save(peticionario).subscribe(response =>{
      //console.log("Se ha guardado");
      this.snackBar.open('El peticionario fue agregado exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/peticionarios']);
    })
  }

  actualizar(peticionario:Peticionario){
    this.servicioPeticionarios
    .update(this.id,peticionario)
      .subscribe(response =>{
        //console.log("Se ha guardado");
        this.snackBar.open('El peticionario fue actualizado exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/peticionarios']);
    })
  }

  getControlFormulario= (valor:string) => this.formulario.get(valor);
  get nombre(){
    return this.getControlFormulario('nombre');
  }

}
