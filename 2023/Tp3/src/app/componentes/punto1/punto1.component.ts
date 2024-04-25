import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  productos : Array<any>;

  constructor() { 
    this.productos =[
      { nombre: "notebook asus 13L", descripcion: "disco 40GB, 15pulgadas", img: "notebook13l.jpg", precio: 45.5},
      { nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99},
      { nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99},
      { nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99},
      { nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99},
      { nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", img: "producto02.jpg", precio: 99}
    ]
  }

  ngOnInit(): void {
  }

}
