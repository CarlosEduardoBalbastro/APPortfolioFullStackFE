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
  
  //tecnologia: '' = "";
  //porcentaje!: number;
  //color: '' = "";
  //imagen: '' = "";
  habilidades: Habilidades[]=[];
  constructor(private formBuilder:FormBuilder, private sHabilidad:HabilidadService) {


    this.formHabilidad= this.formBuilder.group({
      //id:[''],
      tecnologia:[''],
  porcentaje:[''],
  color: [''],
  imagen:['']
    })

   }

  ngOnInit(): void {

   // this.crearHabilidad();

  }

  //metodos para crear Habilidad
get Tecnologia(){
  return this.formHabilidad.get("tecnologia");
}

get Porcentaje(){
  return this.formHabilidad.get("porcentaje");
}

get Color(){
  return this.formHabilidad.get("color");
}

get imagenHabi(){
  return this.formHabilidad.get("imagenHab");
}




onCreateHab():void{

this.sHabilidad.crearHabilidad(this.formHabilidad.value).subscribe( data => {

})

}

onEnviarHabilidad(event:Event){

event.preventDefault;
if (this.formHabilidad.valid){
  this.onCreateHab();
  window.location.reload();

}else{
  alert("Algo ha fallado en la carga");
  this.formHabilidad.markAllAsTouched;
}

}

  // crearHabilidad():void{
  //   const hab = new Habilidades(this.tecnologia, this.porcentaje, this.color,this.imagen);

  //   if (hab != undefined){
  //     this.sHabilidad.crearHabilidad(hab).subscribe(data => {
  //       window.location.reload();
  //     }, err => {
  //       alert('nuevo Habilidad agregado');
  //       alert('recargar pagina para ver nuevo Habilidad')
  //     })
  //   }
 
  // }




}
