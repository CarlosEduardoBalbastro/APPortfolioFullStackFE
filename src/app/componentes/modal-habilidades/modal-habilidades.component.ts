import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {

  formHabilidad: FormGroup;
  
  tecnologia: '' = "";
  porcentaje!: number;
  color: '' = "";
  imagen: '' = "";
  habilidades: Habilidades[]=[];
  constructor(private formBuilder:FormBuilder, private sHabilidad:HabilidadService) {


    this.formHabilidad= this.formBuilder.group({
      tecnologia:[''],
  porcentaje:[''],
  color: [''],
  imagen:['']
    })

   }

  ngOnInit(): void {

   // this.crearHabilidad();

  }


  crearHabilidad():void{
    const hab = new Habilidades(this.tecnologia, this.porcentaje, this.color,this.imagen);

    if (hab != undefined){
      this.sHabilidad.crearHabilidad(hab).subscribe(data => {
        window.location.reload();
      }, err => {
        alert('nuevo Habilidad agregado');
        alert('recargar pagina para ver nuevo Habilidad')
      })
    }
 
  }




}
