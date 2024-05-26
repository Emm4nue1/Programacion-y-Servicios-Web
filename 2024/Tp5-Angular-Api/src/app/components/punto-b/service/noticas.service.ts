import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticasService {
private urlNoticias = "https://livescore6.p.rapidapi.com/news/v2/list";

  constructor(private htpp: HttpClient) {}


  getNoticias():Observable<any>{
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'livescore6.p.rapidapi.com'
    });
    return this.htpp.get(this.urlNoticias, { headers: headers });
  }
}
