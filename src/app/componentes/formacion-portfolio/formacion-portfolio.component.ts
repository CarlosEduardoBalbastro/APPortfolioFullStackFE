import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion-portfolio',
  templateUrl: './formacion-portfolio.component.html',
  styleUrls: ['./formacion-portfolio.component.css']
})
export class FormacionPortfolioComponent implements OnInit {

  miEducacion:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerEducacion().subscribe(data => {
      this.miEducacion=data;
    })

  }

}
