import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent implements OnInit {

  formExperienciaCreate: FormGroup;
  
  //empresaExp: '' = "";
  //estrabajoactual!: boolean;
  //inicio: '' = "";
 // fin: '' = "";
 // descripcion: '' = "";
  //direccion: '' = "" ;
  //imagen: '' = "";
  //stackusado: '' =  "";


  experiencias: Experiencia[]=[];

  constructor(private formBuilder:FormBuilder, private sExperiencia:ExperienciaService, private router: Router) {

this.formExperienciaCreate = this.formBuilder.group({
  empresaExp: [''],
  estrabajoactual: [''],
  inicio: [''] ,
  fin: [''] ,
  descripcion: [''] ,
  direccion: [''] ,
  imagen: [''] ,
  stackusado: [''] 
})

   }

  ngOnInit(): void {
}



//metodos para crear experiencia
  
get EmpresaExp(){
  return this.formExperienciaCreate.get("empresaExp");
}

get EsTrabajoActual(){
  return this.formExperienciaCreate.get("estrabajoactual");
}

get Inicio(){
  return this.formExperienciaCreate.get("inicio");
}

get Fin(){
  return this.formExperienciaCreate.get("fin");
}

get Descripcion(){
  return this.formExperienciaCreate.get("descripcion");
}
     
 get Direccion(){
  return this.formExperienciaCreate.get("direccion");
 }   

 get Imagen (){
  return this.formExperienciaCreate.get("imagen");
 }


 get StackUsado(){
  return this.formExperienciaCreate.get("stackusado");
 }
    
 onCreate(): void {
  this.sExperiencia.crearExp(this.formExperienciaCreate.value).subscribe(data => {

  });
 }

 onEnviar(event:Event){
  event.preventDefault;
  if(this.formExperienciaCreate.valid){
    //metodos
    this.onCreate();
    alert("experiencia creada");
    window.location.reload();
  }else{
    alert("fallo la cagra, intente nuevamente");
    this.formExperienciaCreate.markAllAsTouched();
  }
 }



  // crearExperiencia():void{
  //   const exp = new Experiencia(this.empresaExp, this.estrabajoactual, this.inicio, this.fin, this.descripcion, this.direccion, this.imagen, this.stackusado);
    
  // if (exp != undefined){
  //   this.sExperiencia.crearExp(exp).subscribe(data => {
  //     window.location.reload();
  //   }, err => {
  //     alert("funciona funciona funciona");
  //   })
  // }
  // }

}
