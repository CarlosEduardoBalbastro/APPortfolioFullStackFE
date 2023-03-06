import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion-portfolio',
  templateUrl: './formacion-portfolio.component.html',
  styleUrls: ['./formacion-portfolio.component.css']
})
export class FormacionPortfolioComponent implements OnInit {

  formFormacionUD:FormGroup;

  institucion: '' = "";
  imagen: '' = "";
 curso: '' = "";
 puntaje!:number;
 inicio: '' = "";
  fin: '' = "";
 horas_duracion: '' = "";
  //miEducacion:any;
  formacion: Formacion[]=[];

  constructor(private formBuild:FormBuilder, private sFormacion:FormacionService) {

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
    // this.datosPortfolio.obtenerEducacion().subscribe(data => {
    //   console.log(data);
    //   this.miEducacion=data.educacion;
    // })

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




}
