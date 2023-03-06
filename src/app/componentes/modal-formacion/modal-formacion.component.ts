import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html',
  styleUrls: ['./modal-formacion.component.css']
})
export class ModalFormacionComponent implements OnInit {

  formFormacionCreate:FormGroup;
  institucion: '' = "";
  imagen: '' = "";
 curso: '' = "";
 puntaje!:number;
 inicio: '' = "";
  fin: '' = "";
 horas_duracion: '' = "";
  //miEducacion:any;
  formacion: Formacion[]=[];

  constructor(private formbuilder:FormBuilder, private sFormacion:FormacionService) { 


    this.formFormacionCreate= this.formbuilder.group({
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
  }


  crearForm():void{
    const forma = new Formacion(this.institucion, this.imagen, this.curso, this.puntaje, this.inicio, this.fin, this.horas_duracion)

    this.sFormacion.crearFormacion(forma).subscribe(data  => {
      this.formacion=data;
    })
  }

}
