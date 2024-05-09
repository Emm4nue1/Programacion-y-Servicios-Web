import { Component } from '@angular/core';
import { VOCALES,CONSONANTES,PALABRAS, PREGUNTAS } from '../../models/auxiliar';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  palabraActual: string;
  preguntaActual: string;
  indiceActual: number = 0;
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;
  palabras = PALABRAS;
  
  constructor() {
    this.palabraActual = "";
    this.preguntaActual = PREGUNTAS[0];
  }

  empezarJugo() {
    this.palabraActual = PALABRAS[this.indiceActual];
    this.preguntaActual = PREGUNTAS[Math.floor(Math.random() * PREGUNTAS.length)];
  }

  contarCaracteres(palabra: string, caracteres: string[]) {
    let contador = 0;
    for(let i = 0; i < palabra.length; i++) {
      if(caracteres.includes(palabra[i].toLowerCase())) {
        contador++;
      }
    }
    return contador;
  }

  generarOpcionesIncorrectas(respuestaCorrecta: number): number[] {
    let opcionesIncorrectas: number[] = [];
    while(opcionesIncorrectas.length < 3) {
      // Genera un número aleatorio que esté cerca de la respuesta correcta
      let opcionIncorrecta = Math.floor(respuestaCorrecta + Math.random() * 4 - 2);
      // Asegura que la opción incorrecta no sea igual a la respuesta correcta
      // y que no se haya generado antes
      if(opcionIncorrecta !== respuestaCorrecta && !opcionesIncorrectas.includes(opcionIncorrecta)) {
        opcionesIncorrectas.push(opcionIncorrecta);
      }
    }
    return opcionesIncorrectas;
  }

  verificarRespuesta(respuesta: number) {
    let respuestaCorrecta: number = 0;
    switch(this.preguntaActual) {
      case PREGUNTAS[0]: // Vocales
        respuestaCorrecta = this.contarVocales(this.palabraActual);
        break;
      case PREGUNTAS[1]: // Consonantes
        respuestaCorrecta = this.contarConsonantes(this.palabraActual);
        break;
      case PREGUNTAS[2]: // Letras
        respuestaCorrecta = this.contarLetras(this.palabraActual);
        break;
    }
    if(respuesta === respuestaCorrecta) {
      this.respuestasCorrectas++;
    } else {
      this.respuestasIncorrectas++;
    }
    this.indiceActual++;
    if(this.indiceActual < this.palabras.length) {
      this.empezarJugo();
    } else {
      this.mostrarResultados();
    }
  }

  contarVocales(palabra: string) {
    return this.contarCaracteres(palabra, VOCALES);
  }
  
  contarConsonantes(palabra: string) {
    return this.contarCaracteres(palabra, CONSONANTES);
  }
  
  contarLetras(palabra: string) {
    return palabra.length;
  }

  mostrarResultados() {
    // Muestra los resultados en un modal
  }
}
