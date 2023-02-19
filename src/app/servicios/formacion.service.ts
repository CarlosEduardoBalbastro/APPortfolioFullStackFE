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

public crearFormacion(Forma: Formacion):Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', Forma);
}

public borrarFormacion(id:number):Observable<any>{

  return this.httpClient.delete<any>(this.url  + `borrar/${id}`);

}


public editarFormacion(id:number, Forma:Formacion):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar${id}`, Forma)
}



}
