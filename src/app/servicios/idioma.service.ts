import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  url = 'http://localhost:8080/idiomas/';


  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.url + 'traer');
  }
  

  public detail(id:number):Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.url + `editar/${id}`);
  }

  public save(Idioma: Idioma):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Idioma);
  }

  public update(id: number, Idioma: Idioma):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}` , Idioma);
  }


  public borrar(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }


}
