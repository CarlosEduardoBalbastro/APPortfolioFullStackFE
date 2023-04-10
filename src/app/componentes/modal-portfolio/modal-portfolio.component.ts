import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent implements OnInit {

  formExperienciaCreate: FormGroup;
  
  empresaExp: '' = "";
  estrabajoactual!: boolean;
  inicio: '' = "";
  fin: '' = "";
  descripcion: '' = "";
  direccion: '' = "" ;
  imagen: '' = "";
  stackusado: '' =  "";


  experiencias: Experiencia[]=[];

  constructor(private formBuilder:FormBuilder, private sExperiencia:ExperienciaService) {

this.formExperienciaCreate = this.formBuilder.group({
  empresaExp: [''],
  estrabajoactual: [''],
  inicio: [''] ,
  fin: [''] ,
  descripcion: [''] ,
  direccion: [''] ,
  imagen: [''] ,
  stackusado: [''] 
})

   }

  ngOnInit(): void {
}

  crearExperiencia():void{
    const exp = new Experiencia(this.empresaExp, this.estrabajoactual, this.inicio, this.fin, this.descripcion, this.direccion, this.imagen, this.stackusado);
    
  if (exp != undefined){
    this.sExperiencia.crearExp(exp).subscribe(data => {
      window.location.reload();
    }, err => {
      alert("funciona funciona funciona");
    })
  }
  }

}
