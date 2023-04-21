import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
//componente idioma para mostrar, editar y borrar
  form: FormGroup;
 // lengua: '' = "";
  //nivel: '' = "";
  
  
 
  idiomas: Idioma[]=[]; //sellama al modelo que es un array
  isLogged=false;
  constructor(private formBuilder:FormBuilder, private sIdioma:IdiomaService, private router: Router, private activated: ActivatedRoute , private tokenService: TokenService) { 
       //crear grupo de controles para formulario
  this.form= this.formBuilder.group({
    id:[''],
    lengua:['', [Validators.required]],
    nivel:['', [Validators.required]],
  })
  }

  ngOnInit(): void {
    this.mostrarIdioma();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }

     //const id = this.activated.snapshot.params['id'];

     //this.sIdioma.detail(id).subscribe(data => {

      //this.idiomas=data;

    // }, err => {
      // alert('Error al cargar los datos');
       //this.router.navigate(['index']);
    //}
    
    // )

   

  }

  // muestra idiomas
  mostrarIdioma():void{
    this.sIdioma.lista().subscribe(data => {this.idiomas=data});
   
  }


//Crear Idioma
get Lengua(){
  return  this.form.get('lengua');
}

get Nivel(){
  return this.form.get('nivel');
}


// borra idioma
//metodo esta distinto al de juli
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

// onEditarIdioma(id:number){



//   let idiom = new Idioma(this.lengua, this.nivel);

//   this.sIdioma.update(idiom).subscribe( data => {
   
//     alert("actualice pagina para ver cambios");
//     window.location.reload();

     
//    })
 
 
//   }

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
