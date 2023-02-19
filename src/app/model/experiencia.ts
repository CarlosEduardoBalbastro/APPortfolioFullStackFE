export class Experiencia {
    id:number | undefined;
    empresa: string;
    estrabajoactual:boolean;
    inicio: string;
    fin: string;
    descripcion:string;
    direccion:string;
    imagen:string;
    stackusado:string;


constructor(empresa:string, estrabajoactual:boolean, inicio:string, fin:string, descripcion:string,direccion:string, imagen:string, stackusado:string){
    this.empresa = empresa;
    this.estrabajoactual = estrabajoactual;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
    this.direccion = direccion;
    this.imagen = imagen;
    this.stackusado = stackusado; 
}


}
