import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})


export class Punto2Component {
  readonly VOCALES = ["a", "e", "i", "o", "u"];
  readonly CONSONANTES = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  PALABRAS: string [] = ["Sustancia", "Chocolate", "Murcielago", "Tractor", "Flores", "Arbol", "Manzana", "Agua", "Pelota", "Amigo"];
  readonly PREGUNTAS = ["Cuantas VOCALES hay en esta palabra: ", "Cuantas CONSONANTES hay en esta palabra: ", "Cuantas LETRAS hay en esta palabra: "];



  constructor() {
    let turnoActual = 0;
    let aciertos = 0;
    let errores = 0;
  }

   obtenerPalabraAleatoria(): string {
    return this.PALABRAS[Math.floor(Math.random() * this.PALABRAS.length)];
}


}
