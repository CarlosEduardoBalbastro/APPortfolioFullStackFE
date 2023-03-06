import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { Habilidades } from 'src/app/model/habilidades';
import { Idioma } from 'src/app/model/idioma';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  formHabilidadUD: FormGroup;
  
  tecnologia: '' = "";
  porcentaje!: number;
  color: '' = "";
  imagen: '' = "";

  formExperienciaUD: FormGroup;
  
  empresaExp: '' = "";
  estrabajoactual!: boolean;
  inicio: '' = "";
  fin: '' = "";
  descripcion: '' = "";
  direccion: '' = "" ;
  imagenExp: '' = "";
  stackusado: '' =  "";
  //miExperiencia:any;
  //miIdioma:any;
 // miHabilidad:any;
 
 
  experiencias: Experiencia[]=[];
  habilidades: Habilidades[]=[];
  constructor(private formBuilder:FormBuilder, private sExperiencia:ExperienciaService, private sHabilidad:HabilidadService) {


    this.formHabilidadUD= this.formBuilder.group({
      tecnologia:[''],
  porcentaje:[''],
  color: [''],
  imagen: ['']
    });

    this.formExperienciaUD=this.formBuilder.group({
      empresaExp: [''],
      estrabajoactual: [''],
      inicio: [''],
      fin: [''],
      descripcion: [''], 
      direccion: [''],
      imagenExp: [''],
      stackusado: ['']
    })


 

   }

  
  ngOnInit(): void {

  

this.traerExperiencia();
this.traerHabilidad();
// this.datosPortfolio.obtenerExperiencia().subscribe(data => {
//   this.miExperiencia=data.experiencias;
// }),

// this.datosPortfolio.obtenerIdioma().subscribe(data => {
//   this.miIdioma=data.idiomas;
// }),

// this.datosPortfolio.obtenerHabilidad().subscribe(data => {
//   this.miHabilidad=data.habilidades;
// })



  }



 
  borrarHabilidad(id:number){

    if(id != undefined){
      this.sHabilidad.eliminarHabilidad(id).subscribe(data => {
        this.borrarHabilidad;
      }, err => {
        alert("habilidad eliminada, actualizar para ver cambios");
      })
    }
 
  }

  traerHabilidad():void{
    this.sHabilidad.traerHabilidades().subscribe(data => {
      this.habilidades = data;
    })
  }






  traerExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias=data
    });
  }

  borrarExperiencia(id:number):void{
  
    if(id != undefined){
      this.sExperiencia.borrar(id).subscribe(data => {
        this.borrarExperiencia;
      }, err => {
        alert("Experiencia eliminada, actualizar para ver cambios");
      })
    }
  }




  // onEnviarIdioma(event: Event){
   
  //   event.preventDefault; 
 
  // if(this.formIdioma.valid){
  //   this.onCreateI();
  // }else{
  //   alert('sarasasasa');
  //   this.formIdioma.markAllAsTouched();
  // }
  // }

}




