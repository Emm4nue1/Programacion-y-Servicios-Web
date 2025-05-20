import { Component } from '@angular/core';
import { AutosService } from './service/autos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-punto-c',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './punto-c.component.html',
  styleUrl: './punto-c.component.css'
})
export class PuntoCComponent {
  marcas!: any;
  modelos!: any;

  constructor(private autosService: AutosService) { 
    this.obtenerMarcas();
  }

  obtenerMarcas(): void {
    this.autosService.getMarca().subscribe((marca: any) => {
      this.marcas = marca;
    })
  }

  obtenerModelos(id: number): void {
    this.autosService.getModelo(id).subscribe((modelo: any) => {
      this.modelos = modelo;
    })
  }

}
