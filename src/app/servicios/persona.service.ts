import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = "http://localhost:8080/personas/";

  constructor(private httpClient:HttpClient) { }



public obtenerPersona():Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.url + 'traer');
}


public crearPersona(Person: Persona):Observable<any>{
 return this.httpClient.post<any>(this.url + 'crear', Person); 
}


public borrarPersona(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}` )
}

public editarPersona(id:number,Person:Persona):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}`, Person);
}



}
