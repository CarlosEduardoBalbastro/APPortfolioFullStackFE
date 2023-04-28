import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  isLogged=false;
  personas: Persona[]=[];

  formPersonaUD:FormGroup;
 // nombre:'' = "";
//pellido:'' = "";
//domicilio:'' = "";
//nacionalidad: '' = "";
//lugarNacimiento:'' = "";
//lugarResidencia:'' = "";
//fechaNac:'' = "";
//correo:'' = "";
//sobreMi:'' = "";
//imagen:'' = "";
//cv:'' = "";
//edad:number = 0;
//hijos:'' = "";
//estadoCivil:'' = "";
//empresa:'' = "";
//ocupacion:'' = "";
//area:'' = "";

  
  //miPortfolio:any;
  constructor(private formB:FormBuilder, private sPersona:PersonaService, private tokenService: TokenService) {

this.formPersonaUD = this.formB.group({
  nombre:[''],
  apellido:[''],
domicilio:[''],
nacionalidad:[''],
lugarNacimiento:[''],
lugarResidencia:[''],
fechaNac:[''],
correo:[''],
sobreMi:[''],
imagen:[''],
cv:[''],
edad:[''],
hijos:[''],
estadoCivil:[''],
empresa:[''],
ocupacion:[''],
area:[''],

})

   }

  ngOnInit(): void {

    this.traerPersona();
    if(this.tokenService.getToken()){

      this.isLogged=true;

    }else{
      this.isLogged=false;
    }

    // this.sPersona.obtenerPersona().subscribe(data => {
    //   console.log(data);
    //   this.persona=data;
    // } );



  }

  get Nombre(){
    return this.formPersonaUD.get('nombre');
  }

  get Apellido(){
    return this.formPersonaUD.get('apellido');
  }

  get Domicilio(){
    return this.formPersonaUD.get('domicilio');
  }

  get Nacionalidad(){
    return this.formPersonaUD.get('nacionalidad');
  }

  get LugarNacimiento(){
    return this.formPersonaUD.get('lugarNacimiento');
  }

  get LugarResidencia(){
    return this.formPersonaUD.get('lugarResidencia');
  }

  get FechaNac(){
    return this.formPersonaUD.get('lugarNac');
  }

  get Correo(){
    return this.formPersonaUD.get('correo');
  }

  get SobreMi(){
    return this.formPersonaUD.get('sobreMi');
  }

  get Imagen(){
    return this.formPersonaUD.get('imagen');
  }

  get Cv(){
    return this.formPersonaUD.get('cv');
  }

  get Edad(){
    return this.formPersonaUD.get('edad');
  }

  get Hijos(){
    return this.formPersonaUD.get('hijos');
  }

  get EstadoCivil(){
    return this.formPersonaUD.get('estadoCivil');
  }

  get Empresa(){
    return this.formPersonaUD.get('empresa');
  }

  get Ocupacion(){
    return this.formPersonaUD.get('ocupacion');
  }

  get Area(){
    return this.formPersonaUD.get('area');
  }


  traerPersona():void{
    this.sPersona.obtenerPersona().subscribe(data => {
      this.personas=data;
    })
  }

  borrarPersona(id:number):void{
    this.sPersona.borrarPersona(id).subscribe(data => {
      this.personas;
    })
  }

  editPersona(id:number, pe:Persona):void{
    this.sPersona.editarPersona(id, pe).subscribe(data =>{
this.personas= data;
    })
  }

  onUpdatePersona(){

this.sPersona.update(this.formPersonaUD.value).subscribe(data => {

});


  }

onEnviar(event:Event){

  event.preventDefault;
  if(this.formPersonaUD.valid){
    this.onUpdatePersona();
    alert('Persona Modificada');
    window.location.reload();
  }else{
    alert('algo fallo al cargar');
    this.formPersonaUD.markAllAsTouched;
  }

}
  
}
