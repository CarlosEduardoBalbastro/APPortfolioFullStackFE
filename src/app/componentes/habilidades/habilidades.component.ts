import { Component, OnInit } from '@angular/core';
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

  miExperiencia:any;
  miIdioma:any;
  miHabilidad:any;
  idiomas: Idioma[]=[]; //sellama al modelo que es un array
  experiencias: Experiencia[]=[];
  habilidades: Habilidades[]=[];
  constructor(private datosPortfolio:PortfolioService, private sIdioma:IdiomaService, private sExperiencia:ExperienciaService, private sHabilidad:HabilidadService) { }

  ngOnInit(): void {

  
this.createIdioma();
this.crearExperiencia();
this.crearHabilidad();
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

  crearHabilidad():void{
    this.sHabilidad.traerHabilidades().subscribe(data => {
      this.habilidades=data;
    })
  }

  borrarHabilidad(id:number){
    this.sHabilidad.eliminarHabilidad(id).subscribe(data => {
      this.borrarHabilidad;
    })
  }

  traerHabilidad():void{
    this.sHabilidad.traerHabilidades().subscribe(data => {
      this.habilidades = data;
    })
  }

  createIdioma():void{
    this.sIdioma.lista().subscribe(data => {this.idiomas=data});
  }

  borrarIdioma(id:number){

    if(id != undefined){
      this.sIdioma.borrar(id).subscribe(data =>{
        this.borrarIdioma;
      }, err => {
        alert("No se pudo cargar el idioma");
      } )
    }
    
  }




  traerExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias=data
    });
  }

  borrarExperiencia(id:number):void{
    this.sExperiencia.borrar(id).subscribe(data =>{
      this.traerExperiencia;
    })
  }

  crearExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias = data;
    })
  }

}




