import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-formacion-portfolio',
  templateUrl: './formacion-portfolio.component.html',
  styleUrls: ['./formacion-portfolio.component.css']
})
export class FormacionPortfolioComponent implements OnInit {

  formFormacionUD:FormGroup;

  //institucion: '' = "";
  //imagen: '' = "";
 //curso: '' = "";
 //puntaje!:number;
 //inicio: '' = "";
 // fin: '' = "";
 //horas_duracion: '' = "";
  //miEducacion:any;
  formacion: Formacion[]=[];
  isLogged=false;
  constructor(private formBuild:FormBuilder, private sFormacion:FormacionService, private tokenService: TokenService) {

    this.formFormacionUD= this.formBuild.group({
      institucion:[''],
      imagen:[],
      curso:[],
      puntaje:[''],
      inicio:[''],
      fin:[''],
      horas_duracion:['']
    })

   }

  ngOnInit(): void {

    this.traerFormacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    // this.datosPortfolio.obtenerEducacion().subscribe(data => {
    //   console.log(data);
    //   this.miEducacion=data.educacion;
    // })

  }

//metodos para editar formacion

get Istitucion(){
  return this.formFormacionUD.get("institucion");

}

get Imagen(){
  return this.formFormacionUD.get("imagen");
}

get Curso(){
  return this.formFormacionUD.get("curso");
}

get Puntaje(){
  return this.formFormacionUD.get("puntaje");
}

get Inicio(){
  return this.formFormacionUD.get("inicio");
}

get Fin(){
  return this.formFormacionUD.get("fin");
}

get HorasDuracion(){
  return this.formFormacionUD.get("horas_duracion");
}


onUpdateFormacion(){
  this.sFormacion.update(this.formFormacionUD.value).subscribe(data => {

  });
}


onEnviarFormacion(event:Event){
event.preventDefault;
if(this.formFormacionUD.valid){
  this.onUpdateFormacion();
  alert('Habilidad Modificada');
}else{
  alert('algo fallo al cargar');
  this.formFormacionUD.markAllAsTouched;
}
}


  traerFormacion():void{

    this.sFormacion.traerFormacion().subscribe(data => {
      this.formacion=data;
    })

  }



  borrarForm(id:number):void{
      this.sFormacion.borrarFormacion(id).subscribe(data => {
        this.borrarForm;
      })
  }

borrarFormacionJuli(id:number){

  if(id != undefined){
    this.sFormacion.borrarFormacion(id).subscribe(data => {
      alert("no se pudo eliminar");
    }, error => {
      alert("Experiencia eliminada con éxito");
      this.traerFormacion();
    })
  }

}


}
