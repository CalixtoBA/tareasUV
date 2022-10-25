import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peticionario } from '../models/peticionario.model';

@Injectable({
  providedIn: 'root'
})
export class PeticionarioService {

  private url = environment.apiUrl;

  constructor( private http:HttpClient ) { }

  get(): Observable<Peticionario[]>{
    //return this.http.get<Peticionario[]>(`${this.url}peticionarios`);
    return this.http.get<Peticionario[]>(this.url + 'peticionario');
  }
}
