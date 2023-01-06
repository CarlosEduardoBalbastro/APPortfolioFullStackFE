
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  
obtenerDatos():Observable<any>{
  return this.http.get('./assets/data/data.json');
}

obtenerEducacion():Observable<any>{
  return this.http.get('./assets/data/data_Educacion.json');
}

obtenerExperiencia():Observable<any>{
  return this.http.get('./assets/data/data_Portfolio.json')
}

obtenerIdioma():Observable<any>{
  return this.http.get('./assets/data/data_Portfolio.json')
}

obtenerHabilidad():Observable<any>{
  return this.http.get('./assets/data/data_Portfolio.json')
}



}
