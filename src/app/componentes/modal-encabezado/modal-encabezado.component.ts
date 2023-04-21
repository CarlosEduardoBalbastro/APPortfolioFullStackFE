import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
 // nombre:'' = "";
//apellido:'' = "";
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

  constructor(private formB:FormBuilder, private sPersona:PersonaService,  private router: Router) {

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


  get Nombre(){
    return this.formPersona.get('nombre');
  }

  get Apellido(){
    return this.formPersona.get('apellido');
  }

  get Domicilio(){
    return this.formPersona.get('domicilio');
  }

  get Nacionalidad(){
    return this.formPersona.get('nacionalidad');
  }

  get LugarNacimiento(){
    return this.formPersona.get('lugarNacimiento');
  }

  get LugarResidencia(){
    return this.formPersona.get('lugarResidencia');
  }

  get FechaNac(){
    return this.formPersona.get('lugarNac');
  }

  get Correo(){
    return this.formPersona.get('correo');
  }

  get SobreMi(){
    return this.formPersona.get('sobreMi');
  }

  get Imagen(){
    return this.formPersona.get('imagen');
  }

  get Cv(){
    return this.formPersona.get('cv');
  }

  get Edad(){
    return this.formPersona.get('edad');
  }

  get Hijos(){
    return this.formPersona.get('hijos');
  }

  get EstadoCivil(){
    return this.formPersona.get('estadoCivil');
  }

  get Empresa(){
    return this.formPersona.get('empresa');
  }

  get Ocupacion(){
    return this.formPersona.get('ocupacion');
  }

  get Area(){
    return this.formPersona.get('area');
  }


onCreate():void{

this.sPersona.crearPersona(this.formPersona.value).subscribe(data =>{

});

}

onEnviar(event:Event){

event.preventDefault;

if(this.formPersona.valid){
  this.onCreate();
  alert('Persona Agregada');
  this.router.navigate(['index']);
  //window.location.reload;
}else{
  alert('algo fallo al crear Persona');
  this.formPersona.markAllAsTouched;
}

}



  // crearPersona( pe: Persona):void{
  //   this.sPersona.crearPersona(pe).subscribe(data => {
  //     this.personas=data;
  //   });
  // }



  // onCreatePers():void{

  //   const pers = new Persona(this.nombre, this.apellido, this.domicilio,this.nacionalidad, this.lugarNacimiento, this.lugarResidencia, this.fechaNac, this.correo, this.sobreMi, this.imagen, this.cv, this.edad, this.hijos, this.estadoCivil, this.empresa, this.ocupacion, this.area);
  //   this.sPersona.crearPersona(pers).subscribe(data => {
  //     alert("La persona fue creada este boton funciona");
  //   window.location.reload();
  //   })
  // }


}
