import { Component } from '@angular/core';
import { NoticasService } from './service/noticas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-punto-b',
    imports: [CommonModule, RouterModule],
    templateUrl: './punto-b.component.html',
    styleUrl: './punto-b.component.css'
})
export class PuntoBComponent {
  listaNoticias: any [] = [];

  constructor(private noticasService:NoticasService){
    this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.noticasService.getNoticias().subscribe((data:any) => {
      this.listaNoticias = data.homepageArticles[0].articles;
    })
  }

}
