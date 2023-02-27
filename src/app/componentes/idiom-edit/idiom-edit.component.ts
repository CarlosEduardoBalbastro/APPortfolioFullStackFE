import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idiom-edit',
  templateUrl: './idiom-edit.component.html',
  styleUrls: ['./idiom-edit.component.css']
})
export class IdiomEditComponent implements OnInit {

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


  onEditGet(id:number):void{
    let idi = new Idioma(this.lengua,this.nivel);
    
    this.sIdioma.detail(id).subscribe(data => {
      window.location.reload();
      alert('el idioma fue modificado');
      alert('actualizar pagina para ver cambios');
    })
    
    }
    





}
