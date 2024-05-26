import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {
  private ApiUrlIdiomas = "https://google-translate1.p.rapidapi.com/language/translate/v2/languages";
  private ApiUrlTraducir = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  constructor(private http: HttpClient) {}

  getLenguaje(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      'Accept-Encoding': 'application/gzip'
    });

    return this.http.get(this.ApiUrlIdiomas , { headers: headers });
  }


  traduccirTexto(texto: string, idiomaOrigen: string, idiomaDestino: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      'Accept-Encoding': 'application/gzip',
      'Content-Type': 'application/json'
    }); 
    const body = JSON.stringify( {
      q: texto,
      target: idiomaDestino,
      source: idiomaOrigen
    });
    return this.http.post(this.ApiUrlTraducir, body, { headers: headers });
  }

}
