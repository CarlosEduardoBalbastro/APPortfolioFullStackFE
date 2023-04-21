import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url = "http://localhost:8080/formacion/"

  constructor(private httpClient:HttpClient) { }


public traerFormacion():Observable<Formacion[]>{

  return this.httpClient.get<Formacion[]>(this.url + 'traer')

}

public crearFormacion(forma: Formacion):Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', forma);
}

public borrarFormacion(id:number):Observable<Formacion>{

  return this.httpClient.delete<Formacion>(this.url  + `borrar/${id}`);

}

public update(forma: Formacion):Observable<any>{
  return this.httpClient.put<any>(this.url + 'editar', forma);
}


public editarFormacion(id:number, Forma:Formacion):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar${id}`, Forma)
}

public detail(id: number):Observable<Formacion>{
  return this.httpClient.get<Formacion>(this.url + `ver/${id}`);
  }



}
