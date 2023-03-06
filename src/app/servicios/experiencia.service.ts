import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'http://localhost:8080/experiencias/'

  constructor(private httpClient:HttpClient) { }

public traer():Observable<Experiencia[]>{
          return this.httpClient.get<Experiencia[]>(this.url + 'traer')
}


public crearExp(Experiencia: Experiencia):Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', Experiencia);
}


public borrar(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}


public editarExperiencia(id: number, Experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}` , Experiencia);
}

}
