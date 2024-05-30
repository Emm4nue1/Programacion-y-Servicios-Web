import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MusicaService } from './service/musica.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-musica',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './api-musica.component.html',
  styleUrl: './api-musica.component.css'
})
export class ApiMusicaComponent {
  cocina: any [] = [];
  rta?:any;
  constructor(private recta:MusicaService){
    this.obtenerReceta();
  }

  obtenerReceta(){
    this.recta.getReceta().subscribe((data: any) => {
      this.cocina = data;
    })
  }

  mostrarDetalles(txt:string){
    this.recta.getDetalle(txt).subscribe((data1: any) => {
      this.rta=data1.Ingredientes;
      console.log(this.rta);
    })
  }

}
