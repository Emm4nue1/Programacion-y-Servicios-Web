import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
private x="https://hapi-books.p.rapidapi.com/top_authors";



  constructor(private htpp: HttpClient) { }

  getAutor():Observable<any>{
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'fc4632e173msh84c3f3b62b5615bp13bc20jsn43ab32a5a833',
      'x-rapidapi-host': 'hapi-books.p.rapidapi.comhapi-books.p.rapidapi.com'
    });
    return this.htpp.get(this.x, { headers: headers });
  }

  getDetalle(id:number):Observable<any>{
    const url1="https://hapi-books.p.rapidapi.com/author/"+id;
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'fc4632e173msh84c3f3b62b5615bp13bc20jsn43ab32a5a833',
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
    });

    return this.htpp.get(url1, { headers: headers});
  }

}
