import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiMusicaComponent } from './components/api-musica/api-musica.component';
import { ApiClimaComponent } from './components/api-clima/api-clima.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ApiMusicaComponent,ApiClimaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-parcial';
}
