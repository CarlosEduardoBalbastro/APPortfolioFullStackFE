import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  experiencias: Experiencia[]=[];
  constructor(private sExperiencia:ExperienciaService) { }

  ngOnInit(): void {

    this.traerExperiencia();


  }


  traerExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias=data
    });
  }

  
}
