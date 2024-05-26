export enum TIPO {
    Local = "Local",
    Extranjero = "Extranjero"
}
export class ticket {
    nombre:string;
    id:number;
    dni:number;
    precio:number;
    tipo:TIPO;
    fecha:Date;

    constructor (id:number,dni:number,nombre:string,precio:number,tipo:TIPO,fecha:Date){
        this.id=id;
        this.dni=dni;
        this.nombre=nombre;
        this.precio=precio;
        this.tipo=tipo;
        this.fecha=fecha;
    }
}

