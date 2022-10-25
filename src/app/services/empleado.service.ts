import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url = environment.apiUrl;
  constructor( private http:HttpClient ) { }

  get(): Observable<Empleado[]>{
    //return this.http.get<Empleado[]>(`${this.url}empleados`);
    return this.http.get<Empleado[]>(this.url + 'empleado');
  }

  save(empleado:Empleado):Observable<any>{
    return this.http.post(`${this.url}empleado`,empleado);
    //return this.http.post(this.url+'categorias',categoria);
  }

  getById(id:number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.url}empleado/${id}`);
  }

  update(id:number,empleado:Empleado){
    return this.http.put(`${this.url}empleado/${id}`,empleado);
  }

  delete(id:number){
    return this.http.delete(`${this.url}empleado/${id}`);
  }

}
