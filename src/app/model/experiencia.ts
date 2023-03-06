export class Experiencia {
    id!: number;
    empresaExp: string;
    estrabajoactual:boolean;
    inicio: string;
    fin: string;
    descripcion:string;
    direccion:string;
    imagenExp:string;
    stackusado:string;


constructor(empresaExp:string, estrabajoactual:boolean, inicio:string, fin:string, descripcion:string,direccion:string, imagenExp:string, stackusado:string){
    this.empresaExp = empresaExp;
    this.estrabajoactual = estrabajoactual;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
    this.direccion = direccion;
    this.imagenExp = imagenExp;
    this.stackusado = stackusado; 
}


}
