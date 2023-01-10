import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent implements OnInit {

  miEducacion:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {


    this.datosPortfolio.obtenerEducacion().subscribe(data => {
      
      this.miEducacion=data.educacion;
    })


  }

}
