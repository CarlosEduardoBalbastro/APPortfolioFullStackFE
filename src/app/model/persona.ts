export class Persona {
    id:number | undefined;
    nombre:string;
    apellido:string;
    domicilio:string;
    nacionalidad:string;
    lugarNacimiento:string;
    lugarResidencia:string;
    fechaNac:string;
    correo:string;
    sobreMi:string;
    imagen:string;
    cv:string;
    edad:number;
    hijos:string;
    estadoCivil:string;
    empresa:string;
    ocupacion:string;
    area:string;



    constructor(nombre:string, apellido:string, domicilio:string, nacionalidad:string, lugarNacimiento:string, lugarResidencia:string, fechaNac:string, correo:string, sobreMi:string, imagen:string, cv:string,edad:number, hijos:string, estadoCivil:string, empresa:string, ocupacion:string, area:string){

        this.nombre=nombre;
        this.apellido=apellido;
        this.domicilio=domicilio;
        this.nacionalidad=nacionalidad;
        this.lugarNacimiento=lugarNacimiento;
        this.lugarResidencia=lugarResidencia;
        this.fechaNac=fechaNac;
        this.correo=correo;
        this.sobreMi=sobreMi;
        this.imagen=imagen;
        this.cv=cv;
        this.edad=edad;
        this.hijos=hijos;
        this.estadoCivil=estadoCivil;
        this.empresa=empresa;
        this.ocupacion=ocupacion;
        this.area=area;
        


    }

}
