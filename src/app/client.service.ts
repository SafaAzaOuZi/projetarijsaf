import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

const URL = "http://localhost:3000/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  tabClients: Client[] = [
    {id: 1, nom: 'azaouzi', prenom:'Safa', email:'azaouzisafa1@gmail.com', password:'admisnshalah1234',tel:'525025352'},
    {id: 2, nom: 'azaouzi', prenom:'Arij', email:'arijazaouzi654@gmail.com', password:'arijAz123*',tel:'28394484'}
  ];
  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(URL);
    }
  addClient(c:Client):Observable<Client>{
    return this.http.post<Client>(URL, c);
    }

      
}