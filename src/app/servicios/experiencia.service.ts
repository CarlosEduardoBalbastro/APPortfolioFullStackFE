import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'https://apportfoliofullstackbe-production.up.railway.app/experiencias/'

  constructor(private httpClient:HttpClient) { }

public traer():Observable<Experiencia[]>{
          return this.httpClient.get<Experiencia[]>(this.url + 'traer');
}


public crearExp(experiencia: Experiencia):Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', experiencia);
}


public borrar(id:number):Observable<Experiencia>{
  return this.httpClient.delete<Experiencia>(this.url + `borrar/${id}`);
}


public editarExperiencia(id: number, experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}` , experiencia);
}

public update(experiencia:Experiencia): Observable <any>{
  return this.httpClient.put <any>(this.url + 'editar', experiencia);
}

public detail(id: number):Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  } 

}
