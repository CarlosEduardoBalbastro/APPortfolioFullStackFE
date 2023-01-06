import { Component, OnInit } from '@angular/core';
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
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

this.datosPortfolio.obtenerExperiencia().subscribe(data => {
  this.miExperiencia=data.experiencias;
}),

this.datosPortfolio.obtenerIdioma().subscribe(data => {
  this.miIdioma=data.idiomas;
}),

this.datosPortfolio.obtenerHabilidad().subscribe(data => {
  this.miHabilidad=data.habilidades;
})




  }

}
