import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion-portfolio',
  templateUrl: './formacion-portfolio.component.html',
  styleUrls: ['./formacion-portfolio.component.css']
})
export class FormacionPortfolioComponent implements OnInit {

  miEducacion:any;
  formacion: Formacion[]=[];
  constructor(private datosPortfolio:PortfolioService, private sFormacion:FormacionService) { }

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

  crearFormacion():void{
    this.sFormacion.traerFormacion().subscribe(data  => {
      this.formacion=data;
    })
  }

  borrarFormacion(id:number):void{
      this.sFormacion.borrarFormacion(id).subscribe(data => {
        this.borrarFormacion;
      })
  }




}
