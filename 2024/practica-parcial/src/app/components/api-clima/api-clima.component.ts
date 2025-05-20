import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClimaService } from './service/clima.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-clima',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './api-clima.component.html',
  styleUrls: ['./api-clima.component.css'],
})
export class ApiClimaComponent {
  z?: any;
  detalles: any = {};
  @ViewChild('exampleModal') modal!: ElementRef;

  constructor(private autor: ClimaService) {
    this.obtenerReceta();
  }

  obtenerReceta() {
    this.autor.getAutor().subscribe({
      next: (data: any) => {
        this.z = data;
      },
      error: (err) => {
        console.error('Error al obtener autores:', err);
      },
    });
  }

  ObteneDetalle(id: number) {
    this.autor.getDetalle(id).subscribe({
      next: (data: any) => {
        this.detalles = data;
        // Mostrar el modal después de recibir los datos
        const modalElement = this.modal.nativeElement;
        const bootstrapModal = new (window as any).bootstrap.Modal(modalElement);
        bootstrapModal.show();
      },
      error: (err) => {
        console.error('Error al obtener detalles:', err);
      },
    });
  }
}