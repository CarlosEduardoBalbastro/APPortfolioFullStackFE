import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = "https://apportfoliofullstackbe-production.up.railway.app/personas/";

  constructor(private httpClient:HttpClient) { }



public obtenerPersona():Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.url + 'traer');
}


public crearPersona(Person: Persona):Observable<any>{
 return this.httpClient.post<any>(this.url + 'crear', Person); 
}


public borrarPersona(id:number):Observable<Persona>{
  return this.httpClient.delete<Persona>(this.url + `borrar/${id}` )
}

public editarPersona(id:number,Person:Persona):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}`, Person);
}

public update(Person:Persona): Observable <any>{
  return this.httpClient.put <any>(this.url + 'editar', Person);
}



}
