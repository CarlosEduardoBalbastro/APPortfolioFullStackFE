import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  personas: Persona[]=[];

  formPersonaUD:FormGroup;
  nombre:'' = "";
apellido:'' = "";
domicilio:'' = "";
nacionalidad: '' = "";
lugarNacimiento:'' = "";
lugarResidencia:'' = "";
fechaNac:'' = "";
correo:'' = "";
sobreMi:'' = "";
imagen:'' = "";
cv:'' = "";
edad:number = 0;
hijos:'' = "";
estadoCivil:'' = "";
empresa:'' = "";
ocupacion:'' = "";
area:'' = "";

  
  //miPortfolio:any;
  constructor(private formB:FormBuilder, private sPersona:PersonaService) {

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

    // this.sPersona.obtenerPersona().subscribe(data => {
    //   console.log(data);
    //   this.persona=data;
    // } );



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


  
}
