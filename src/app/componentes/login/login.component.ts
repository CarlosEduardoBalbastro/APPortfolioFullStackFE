import { Component, OnInit } from '@angular/core';

// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form: FormGroup;
  isLogged= false;
  isLogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles:string[]=[];
  errMsj!: string;
    // Inyectar en el constructor el formBuilder
  constructor(private tokenService: TokenService , private autentificacionService: AuthService, private router:Router) {
     
   }

  ngOnInit(): void {

if(this.tokenService.getToken()){
  this.isLogged=true;
  this.isLogginFail=false;
  this.roles=this.tokenService.getAuthorities();
}

   }



   onLogin(): void {
    this.loginUsuario= new LoginUsuario(this.nombreUsuario, this.password);
    this.autentificacionService.login(this.loginUsuario).subscribe(data => {
      
      this.isLogged= true;
      this.isLogginFail=false;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      
      this.roles = data.authorities;
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
   }


  // get Password(){
  //   return this.form.get("password");
  // }
 
  // get Mail(){
  //  return this.form.get("email");
  // }

  // get PasswordValid(){
  //   return this.Password?.touched && !this.Password?.valid;
  // }

  // get MailValid() {
  //   return false
  // }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    //suscribir al metodo iniciar sesion que nos provee 
    //servicio de autentificacion
    //this.autentificacionService.IniciarSesion(this.form.value).subscribe(data=> {
       //console.log("DATA: " + JSON.stringify(data));
       
      // this.rutas.navigate(['/index']);
     //})
    
     
    
    //if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      //alert("Todo salio bien ¡Enviar formuario!")
    //}else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      //this.form.markAllAsTouched(); 
    //}
 
  }



}
