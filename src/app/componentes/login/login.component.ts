import { Component, OnInit } from '@angular/core';

// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
    // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private autentificacionService:AutentificacionService, private rutas:Router) {
        ///Creamos el grupo de controles para el formulario de login
        this.form= this.formBuilder.group({
         
          email:['', [Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8)]],
          // deviceInfo:this.formBuilder.group({
          //   deviceId: ["123123"],
          //   deviceType: ["DEVICE_TYPE_ANDROID"],
          //   notificationToken: ["123123ececec34"]
          // })
       })
   }

  ngOnInit(): void { }


  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    //suscribir al metodo iniciar sesion que nos provee 
    //servicio de autentificacion
    this.autentificacionService.IniciarSesion(this.form.value).subscribe(data=> {
      console.log("DATA: " + JSON.stringify(data));
       
      
    })
    
    this.rutas.navigate(['']);
    
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }



}
