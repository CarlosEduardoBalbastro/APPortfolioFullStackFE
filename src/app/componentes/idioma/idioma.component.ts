import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  formIdiomaUD: FormGroup;
  lengua: '' = "";
  nivel: '' = "";

  
  

  idiomas: Idioma[]=[]; //sellama al modelo que es un array
  isLogged=false;
  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService ) { 
       //crear grupo de controles para formulario
  this.formIdiomaUD= this.formBuilder.group({
    lengua:[''],
    nivel:['']
  })
  }

  ngOnInit(): void {

    this.mostrarIdioma();

  }

  // muestra idiomas
  mostrarIdioma():void{
    this.sIdioma.lista().subscribe(data => {this.idiomas=data});
   
  }


// Crear Idioma
// get Lengua(){
//   return  this.formIdioma.get('lengua');
// }

// get Nivel(){
//   return this.formIdioma.get('nivel');
// }


// borra idioma
borrarIdioma(id:number){

  if(id != undefined){
    this.sIdioma.borrar(id).subscribe(data =>{
      this.borrarIdioma;
    }, err => {
      alert("actualizar la pagina para ver cambios");
    } )
  }
  // this.sIdioma.borrar(id).subscribe(data => {
  //   alert("recargar la pagina para ver resultados");
  //   this.borrarIdioma;
  //   window.location.reload();
    
  // })
  
}

onEditarIdioma(id:number){



  let idiom = new Idioma(this.lengua, this.nivel);

  this.sIdioma.update(id, idiom).subscribe( data => {
   
    alert("actualice pagina para ver cambion");
    window.location.reload();

     
   })
 
 
  }
    
  



}
