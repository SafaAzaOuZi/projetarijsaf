import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';
const URL='htttp://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpClient:HttpClient) { }
  getComments():Observable<Commentaire[]>{
    return this.httpClient.get<Commentaire[]>(
      URL+'/Commentaire'
    );
  }
}
