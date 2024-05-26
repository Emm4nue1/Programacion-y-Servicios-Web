import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor(private http: HttpClient) { }

  getQr64(text:string): Observable<any> {
    const urlQr = `https://qr-code-generator20.p.rapidapi.com/generatebasicbase64?data=${text}&size=500`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'qr-code-generator20.p.rapidapi.com'
    });
    return this.http.get(urlQr, { headers: headers, responseType: 'text' });
  }
}
