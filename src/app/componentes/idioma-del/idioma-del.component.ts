import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma-del',
  templateUrl: './idioma-del.component.html',
  styleUrls: ['./idioma-del.component.css']
})
export class IdiomaDelComponent implements OnInit {

  formIdioma: FormGroup;
  lengua: '' = "";
  nivel: '' = "";

  idiomas: Idioma[]=[]; //sellama al modelo que es un array
  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService) {
          //crear grupo de controles para formulario
  this.formIdioma= this.formBuilder.group({
    lengua:[''],
    nivel:['']
  })
   }

  ngOnInit(): void {
  }



}
