import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma-add',
  templateUrl: './idioma-add.component.html',
  styleUrls: ['./idioma-add.component.css']
})
export class IdiomaAddComponent implements OnInit {
  form: FormGroup;
  //lengua: '' = "";
  //nivel: '' = "";

  idiomas: Idioma[]=[]; //sellama al modelo que es un array

  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService, private router:Router ) {
           //crear grupo de controles para formulario
  this.form= this.formBuilder.group({
    lengua:['',[Validators.required]],
    nivel:['', [Validators.required]],
  })
   }

  ngOnInit(): void {
  }

  get Lengua(){
    return this.form.get("lengua");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

onCreateI():void{

  this.sIdioma.save(this.form.value).subscribe(data => {

  });
  
}
 
onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){

    //Metodos
    this.onCreateI();
    alert("Idioma Creado");
    this.router.navigate(['index']);
  }else {
    alert("algo ha fallado en la carga");
    this.form.markAllAsTouched();
  }
}
 

  }



