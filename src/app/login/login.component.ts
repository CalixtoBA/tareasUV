import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario!:FormGroup;

  constructor( private servicioRegistro:AuthService,
    private router:Router
     ) { }

  ngOnInit(): void {    
    this.formulario = new FormGroup({
      email: new FormControl<string|null>('',{
        validators:[Validators.required,Validators.email],
        nonNullable:true
      }),
      password: new FormControl<string|null>('',{
        validators:[Validators.required,Validators.minLength(4)],
        nonNullable:true
      })
    })          
  }

  login(){
    this.servicioRegistro
    .login(this.formulario.value)
    .subscribe(response=>{
      console.log(response);
      this.router.navigate(['/empleados'])
    })
  }

  getControlFormulario = (valor:string) => this.formulario.get(valor);

  get email(){
    return this.getControlFormulario('email');
  }

  get password(){
    return this.getControlFormulario('password');
  }

}
