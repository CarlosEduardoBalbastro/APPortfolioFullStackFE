import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma-add',
  templateUrl: './idioma-add.component.html',
  styleUrls: ['./idioma-add.component.css']
})
export class IdiomaAddComponent implements OnInit {
  formIdioma: FormGroup;
  lengua: '' = "";
  nivel: '' = "";

  idiomas: Idioma[]=[]; //sellama al modelo que es un array

  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService ) {
           //crear grupo de controles para formulario
  this.formIdioma= this.formBuilder.group({
    lengua:[''],
    nivel:['']
  })
   }

  ngOnInit(): void {
  }

onCreateI():void{
  const idi= new Idioma(this.lengua, this.nivel);
 
  if(idi != undefined){
 
   this.sIdioma.save(idi).subscribe(data => {
 
    window.location.reload();
   }, err => {
     alert('nuevo idioma agregado');
     alert('recargar pagina para ver nuevo Idioma')
   })
 
 }
       
  }


}
