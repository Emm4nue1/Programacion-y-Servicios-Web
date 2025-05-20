import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private baseUrl = 'https://hapi-books.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getAutor(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
    });
    return this.http.get(`${this.baseUrl}/top_authors`, { headers });
  }

  getDetalle(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
    });
    return this.http.get(`${this.baseUrl}/author/${id}`, { headers });
  }
}