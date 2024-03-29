import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  url = 'https://apportfoliofullstackbe-production.up.railway.app/idiomas/';


  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.url + 'traer');
  }
  

  public detail(id:number):Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.url + `editar/${id}`);
  }

  public save(idioma: Idioma):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', idioma);
  }

  public update(idioma: Idioma):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar`, idioma);
  }

  public edit(id: number, idioma:Idioma): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, idioma);
  }


  public borrar(id:number):Observable<Idioma>{
    return this.httpClient.delete<Idioma>(this.url + `borrar/${id}`);
  }


}
