import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
private urlMarca = "https://car-specs.p.rapidapi.com/v2/cars/makes";


  constructor(private htpp: HttpClient) { }

  getMarca():Observable<any>{
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'car-specs.p.rapidapi.com'
    });
    return this.htpp.get(this.urlMarca, { headers: headers });
  }

  getModelo(id: number):Observable<any> {
    const urlModelo = `https://car-specs.p.rapidapi.com/v2/cars/makes/${id}/models`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'car-specs.p.rapidapi.com'
    });
    return this.htpp.get(urlModelo, { headers: headers });
  }

}
