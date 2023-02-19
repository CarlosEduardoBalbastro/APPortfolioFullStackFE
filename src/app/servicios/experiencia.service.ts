import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  urlServ = 'http://localhost:8080/experiencias/'

  constructor(private httpClient:HttpClient) { }

public traer():Observable<Experiencia[]>{
          return this.httpClient.get<Experiencia[]>(this.urlServ + 'traer')
}


public crearExp(Experiencia: Experiencia):Observable<any>{
return this.httpClient.post<any>(this.urlServ + 'crear', Experiencia);
}


public borrar(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.urlServ + `borrar/${id}`);
}


public editarExperiencia(id: number, Experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.urlServ + `editar/${id}` , Experiencia);
}

}
