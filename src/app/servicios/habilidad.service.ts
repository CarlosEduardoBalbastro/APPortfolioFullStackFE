import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';




@Injectable({
  providedIn: 'root'
})

export class HabilidadService {


   url = "http://localhost:8080/habilidades/";

  constructor(private httpClient:HttpClient) { }

public traerHabilidades():Observable<Habilidades[]>{
  return  this.httpClient.get<Habilidades[]>(this.url + 'traer');
}


public editarHabilidad(id:number, Habilidad:Habilidades):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}`, Habilidad);
}

public crearHabilidad(Habilidad: Habilidades):Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', Habilidad)
}

public eliminarHabilidad(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}


}
