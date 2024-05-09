export class producto {
    id:Number;
    imagen:String;
    nombre:String;
    descripcion:String;
    precio:Number;
    cantidad:Number;

    constructor(id:Number, imagen:String,nombre:String,descripcion:String,precio:Number) {
        this.id=id;
        this.imagen=imagen;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=1;
    }
 }