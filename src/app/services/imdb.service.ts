import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ImdbFilmeModel } from './imdb-filme.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  // Chave da API
  private apiKey: string = "k_m7d643bh";
  // API gerada pelo meu json-server
  baseUrl:string = 'http://localhost:3000/items';
  // Acessar API usando a chave
  baseUrlPoster:string = `http://imdb-api.com/en/API/Posters/${this.apiKey}/`;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<ImdbFilmeModel[]>{
    return this.httpClient.get<ImdbFilmeModel[]>(this.baseUrl);
  }

  getPosters(id:string): Observable<any>{
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }

  putPosters(id:string, body:any){
    return this.httpClient.put(`${this.baseUrl}/${id}`,body).subscribe((data) => {
      return data;
    })
  }

}
