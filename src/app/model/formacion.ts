export class Formacion {

    id!:number;
    institucion:string;
    
    imagen:string;
  
 
    curso:string;
   
    puntaje:number;
   inicio:string;
    fin:string;
   horas_duracion:string;


   constructor(institucion:string, imagen:string, curso:string, puntaje:number, inicio:string, fin:string,horas_duracion:string ){

    this.institucion=institucion;
    this.imagen=imagen;
    this.curso=curso;
    this.puntaje=puntaje;
    this.inicio=inicio;
    this.fin=fin;
    this.horas_duracion=horas_duracion;



   }


}
