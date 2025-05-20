import { Component } from '@angular/core';
import { TraductorService } from './service/traductor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-punto-a',
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './punto-a.component.html',
    styleUrl: './punto-a.component.css'
})
export class PuntoAComponent {
  texto:string="";
  origen:string="es";
  destino:string="";
  textoTraducido:string="";
  listaIdiomas:any[]=[];

  constructor(private traductor:TraductorService){
    this.obtenerIdiomas();
  }

  obtenerIdiomas(): void {
    this.traductor.getLenguaje().subscribe((respuesta:any) => {
      console.log(respuesta);
      this.listaIdiomas = respuesta.data.languages.map((lang:any) => lang.language);
    });
  }

  traducirTexto(){
    this.traductor.traduccirTexto(this.texto,this.destino,this.origen).subscribe((txt:any) => {
    this.textoTraducido= txt.data.translations[0].translatedText;
    });
  }
}
