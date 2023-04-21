import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { Habilidades } from 'src/app/model/habilidades';
import { Idioma } from 'src/app/model/idioma';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  formHabilidadUD: FormGroup;
  
  //tecnologia: '' = "";
  //porcentaje!: number;
  //color: '' = "";
  //imagenHab: '' = "";

  formExperienciaUD: FormGroup;
  
  //empresaExp: '' = "";
  //estrabajoactual!: boolean;
  //inicio: '' = "";
  //fin: '' = "";
  //descripcion: '' = "";
  //direccion: '' = "" ;
  //imagen: '' = "";
  //stackusado: '' =  "";
  //miExperiencia:any;
  //miIdioma:any;
 // miHabilidad:any;
 
 isLogged=false;
  experiencias: Experiencia[]=[];
  habilidades: Habilidades[]=[];
  constructor(private formBuilder:FormBuilder, private sExperiencia:ExperienciaService, private sHabilidad:HabilidadService, private router: Router, private tokenService: TokenService ) {


    this.formHabilidadUD= this.formBuilder.group({
      id:[''],
      tecnologia:['', [Validators.required]],
      porcentaje:['', [Validators.required]],
      color: ['', [Validators.required]],
      imagenHab: ['']
    });

    this.formExperienciaUD=this.formBuilder.group({
      id:[''],
      empresaExp: [''],
      estrabajoactual: [''],
      inicio: [''],
      fin: [''],
      descripcion: [''], 
      direccion: [''],
      imagen: [''],
      stackusado: ['']
    })


 

   }

  
  ngOnInit(): void {

  

this.traerExperiencia();
this.traerHabilidad();

if (this.tokenService.getToken()){
  this.isLogged=true;
}else{
  this.isLogged=false;
}
// this.datosPortfolio.obtenerExperiencia().subscribe(data => {
//   this.miExperiencia=data.experiencias;
// }),

// this.datosPortfolio.obtenerIdioma().subscribe(data => {
//   this.miIdioma=data.idiomas;
// }),

// this.datosPortfolio.obtenerHabilidad().subscribe(data => {
//   this.miHabilidad=data.habilidades;
// })



  }

//metodos para editar HAbilidad
get Tecnologia(){
  return this.formHabilidadUD.get("tecnologia");
}

get Porcentaje(){
  return this.formHabilidadUD.get("porcentaje");
}

get Color(){
  return this.formHabilidadUD.get("color");
}

get imagenHabi(){
  return this.formHabilidadUD.get("imagenHab");
}


onUpdateHab():void{

  this.sHabilidad.update(this.formHabilidadUD.value).subscribe(data => {

  })

}

onEnviarHab(event:Event){
  event.preventDefault;
  if (this.formHabilidadUD.valid){
    this.onUpdateHab();
    alert("Habilidad Modificada");
    this.router.navigate(['index']);
  }else{
    alert("Algo Falló al cargar");
    this.formHabilidadUD.markAllAsTouched;
  }
}

 
  borrarHabilidad(id:number){

    if(id != undefined){
      this.sHabilidad.eliminarHabilidad(id).subscribe(data => {
        this.borrarHabilidad;
      }, err => {
        alert("habilidad eliminada, actualizar para ver cambios");
      })
    }
 
  }
//listo
  traerHabilidad():void{
    this.sHabilidad.traerHabilidades().subscribe(data => {
      this.habilidades = data;
    })
  }



//metodos para editar experiencia
  
get EmpresaExp(){
  return this.formExperienciaUD.get("empresaExp");
}

get EsTrabajoActual(){
  return this.formExperienciaUD.get("estrabajoactual");
}

get Inicio(){
  return this.formExperienciaUD.get("inicio");
}

get Fin(){
  return this.formExperienciaUD.get("fin");
}

get Descripcion(){
  return this.formExperienciaUD.get("descripcion");
}
     
 get Direccion(){
  return this.formExperienciaUD.get("direccion");
 }   

 get Imagen (){
  return this.formExperienciaUD.get("imagen");
 }


 get StackUsado(){
  return this.formExperienciaUD.get("stackusado");
 }
     

 onUpdateExp():void{

  this.sExperiencia.update(this.formExperienciaUD.value).subscribe(data => {

  })

}


onEnviarExp(event:Event){
  event.preventDefault;
  if (this.formExperienciaUD.valid){
    this.onUpdateExp();
    alert("Experiencia Modificada");
    this.router.navigate(['index']);
  }else{
    alert("Algo Falló al cargar");
    this.formExperienciaUD.markAllAsTouched;
  }
}


  traerExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias=data
    });
  }

  //tenemos distinto metodo con Juli
  borrarExperiencia(id:number):void{
  
    if(id != undefined){
      this.sExperiencia.borrar(id).subscribe(data => {
        this.borrarExperiencia;
      }, err => {
        alert("Experiencia eliminada, actualizar para ver cambios");
      })
    }
  }




  // onEnviarIdioma(event: Event){
   
  //   event.preventDefault; 
 
  // if(this.formIdioma.valid){
  //   this.onCreateI();
  // }else{
  //   alert('sarasasasa');
  //   this.formIdioma.markAllAsTouched();
  // }
  // }

}




