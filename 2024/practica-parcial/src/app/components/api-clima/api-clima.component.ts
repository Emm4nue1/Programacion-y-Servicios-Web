import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClimaService } from './service/clima.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-clima',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './api-clima.component.html',
  styleUrl: './api-clima.component.css'
})
export class ApiClimaComponent {
  z?:any;
  detalles?:any;
  constructor(private autor:ClimaService) {
    this.obtenerReceta();
  }

  obtenerReceta(){
    this.autor.getAutor().subscribe((data: any) => {
      this.z = data;
    })
  }

  ObteneDetalle(id:number){
    this.autor.getDetalle(id).subscribe((data1:any)=>{
      this.detalles=data1;
    })
  }
}
