export class producto {
    id:number;
    imagen:string;
    nombre:string;
    descripcion:string;
    precio:number;
    cantidad:number;

    constructor(id:number, imagen:string,nombre:string,descripcion:string,precio:number) {
        this.id=id;
        this.imagen=imagen;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=1;
    }
 }