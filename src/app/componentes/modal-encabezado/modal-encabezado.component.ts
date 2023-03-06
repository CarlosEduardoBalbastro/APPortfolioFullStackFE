import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-encabezado',
  templateUrl: './modal-encabezado.component.html',
  styleUrls: ['./modal-encabezado.component.css']
})
export class ModalEncabezadoComponent implements OnInit {

  personas: Persona[]=[];

  formPersona:FormGroup;
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

  constructor(private formB:FormBuilder, private sPersona:PersonaService) {

    this.formPersona = this.formB.group({
      nombre:[''],
      apellido:[''],
      domicilio:[''],
      nacionalidad: [''],
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
      area:['']
    })


   }

  ngOnInit(): void {
  }



  crearPersona( pe: Persona):void{
    this.sPersona.crearPersona(pe).subscribe(data => {
      this.personas=data;
    });
  }



  onCreatePers():void{

    const pers = new Persona(this.nombre, this.apellido, this.domicilio,this.nacionalidad, this.lugarNacimiento, this.lugarResidencia, this.fechaNac, this.correo, this.sobreMi, this.imagen, this.cv, this.edad, this.hijos, this.estadoCivil, this.empresa, this.ocupacion, this.area);
    this.sPersona.crearPersona(pers).subscribe(data => {
      alert("La persona fue creada este boton funciona");
    window.location.reload();
    })
  }


}
