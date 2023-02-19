import { Component, OnInit } from '@angular/core';
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
  //miPortfolio:any;
  constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {

    this.crearPersona();

    // this.sPersona.obtenerPersona().subscribe(data => {
    //   console.log(data);
    //   this.persona=data;
    // } );



  }

  crearPersona():void{
    this.sPersona.obtenerPersona().subscribe(data => {
      this.personas=data;
    })
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
  
}
