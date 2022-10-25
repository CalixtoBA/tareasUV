import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-agregar-editar-empleados',
  templateUrl: './agregar-editar-empleados.component.html',
  styleUrls: ['./agregar-editar-empleados.component.scss']
})
export class AgregarEditarEmpleadosComponent implements OnInit {
  formulario!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder,
    private servicioEmpleados:EmpleadoService,
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
       this.llenarDatosEmpleados(this.id);
    }
  }

  llenarDatosEmpleados(id:number){
    this.servicioEmpleados.getById(id)
        .subscribe((empleado:Empleado)=>{
          this.formulario.patchValue({
            ...empleado
          })
    });
  }

  guardar(){
    const empleado: Empleado ={
      ...this.formulario.value
    };

    if(this.id===0){
      this.agregar(empleado);
    }
    else{
      this.actualizar(empleado);
    }
  }

  agregar(empleado:Empleado){
    this.servicioEmpleados.save(empleado).subscribe(response =>{
      //console.log("Se ha guardado");
      this.snackBar.open('El empledo fue agregado exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/empleados']);
    })
  }

  actualizar(empleado:Empleado){
    this.servicioEmpleados
    .update(this.id,empleado)
      .subscribe(response =>{
        //console.log("Se ha guardado");
        this.snackBar.open('El empleado fue actualizado exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/empleados']);
    })
  }

  getControlFormulario= (valor:string) => this.formulario.get(valor);
  get nombre(){
    return this.getControlFormulario('nombre');
  }

}
