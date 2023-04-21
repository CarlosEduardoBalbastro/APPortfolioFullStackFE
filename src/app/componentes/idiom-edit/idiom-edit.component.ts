import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idiom-edit',
  templateUrl: './idiom-edit.component.html',
  styleUrls: ['./idiom-edit.component.css']
})
export class IdiomEditComponent implements OnInit {

  form: FormGroup;
  //formIdioma: FormGroup;
  //lengua: '' = "";
  //nivel: '' = "";
  
  idio: Idioma | undefined;

  //idiomas: Idioma[]=[]; //sellama al modelo que es un array

  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService, private router: Router, private activated: ActivatedRoute ) {
          //crear grupo de controles para formulario
  this.form= this.formBuilder.group({
    id:[''],
    lengua:['', [Validators.required]],
    nivel:['', [Validators.required]]
  })
   }

  ngOnInit(): void {


        const id = this.activated.snapshot.params['id'];

     this.sIdioma.detail(id).subscribe(data => {

       this.idio=data;

     }, err => {
       alert('Error al cargar los datos');
       this.router.navigate(['idiomas']);
     }
    
     )
  }

  //Crear Idioma
get Lengua(){
  return  this.form.get('lengua');
}

get Nivel(){
  return this.form.get('nivel');
}

onUpdate():void{
  this.sIdioma.update(this.form.value).subscribe(data => {

  })
  
}

  
    


    onEnviar(event:Event){
      event.preventDefault;
      if (this.form.valid){
    
        this.onUpdate();
    
        alert('Idioma modificado');
    
        this.router.navigate(['index']);
    
      }else{
        alert("fallo la carga, intente nuevamente");
        this.form.markAllAsTouched();
      }
    }


}
