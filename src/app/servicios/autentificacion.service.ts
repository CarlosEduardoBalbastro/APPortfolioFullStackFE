import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  url= "http://localhost:4200";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {

    console.log("el servicio esta funcionando");

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||('{}')));

   }

   //metodo iniciar sesion
   IniciarSesion(credenciales:any):Observable<any>
   {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));

      return data
    }))
   }
  
}
