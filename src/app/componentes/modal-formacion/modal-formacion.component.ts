import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html',
  styleUrls: ['./modal-formacion.component.css']
})
export class ModalFormacionComponent implements OnInit {

  formFormacionCreate:FormGroup;
  //institucion: '' = "";
  //imagen: '' = "";
 //curso: '' = "";
 //puntaje!:number;
 //inicio: '' = "";
  //fin: '' = "";
 //horas_duracion: '' = "";
  //miEducacion:any;
  formacion: Formacion[]=[];

  constructor(private formbuilder:FormBuilder, private sFormacion:FormacionService, private router: Router) { 


    this.formFormacionCreate= this.formbuilder.group({
      institucion:[''],
      imagen:[''],
      curso:[''],
      puntaje:[''],
      inicio:[''],
      fin:[''],
      horas_duracion:['']
    })

  }

  ngOnInit(): void {
  }


  get Istitucion(){
    return this.formFormacionCreate.get("institucion");

  }

  get Imagen(){
    return this.formFormacionCreate.get("imagen");
  }

  get Curso(){
    return this.formFormacionCreate.get("curso");
  }

  get Puntaje(){
    return this.formFormacionCreate.get("puntaje");
  }

  get Inicio(){
    return this.formFormacionCreate.get("inicio");
  }

  get Fin(){
    return this.formFormacionCreate.get("fin");
  }

  get HorasDuracion(){
    return this.formFormacionCreate.get("horas_duracion");
  }

  // crearForm():void{
  //   const forma = new Formacion(this.institucion, this.imagen, this.curso, this.puntaje, this.inicio, this.fin, this.horas_duracion)

  //   this.sFormacion.crearFormacion(forma).subscribe(data  => {
  //     this.formacion=data;
  //   })
  // }

onCreate():void{


  this.sFormacion.crearFormacion(this.formFormacionCreate.value).subscribe(data =>{

  });

}


onEnviar(event:Event){
  event.preventDefault;
  if(this.formFormacionCreate.valid){
    this.onCreate();
    alert("Estudio agregado");
    window.location.reload();
  }else{
    alert("Hubo algun fallo en la carga");
    this.formFormacionCreate.markAllAsTouched();
  }
}



}
