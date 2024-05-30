import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
private url="https://recipe-book2.p.rapidapi.com/recipes-popular";
  constructor(private htpp: HttpClient) { }

  getReceta():Observable<any>{
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
    });
    return this.htpp.get(this.url, { headers: headers });
  }


  getDetalle(txt:string):Observable<any>{
    const url1="https://recipe-book2.p.rapidapi.com/recipe-details?path="+txt;
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
    });

    return this.htpp.get(url1, { headers: headers});
  }


}
