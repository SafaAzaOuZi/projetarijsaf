import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produitssoins } from './produitssoins';

// naamlha bch kif nhot e lien hedha fl google yjybli l page mteay li hajti  beha
const URL = "http://localhost:3000/produitsdesoins";

@Injectable({
  providedIn: 'root'
})
export class ProduitssoinsService {

  constructor(private http: HttpClient) { }
  //get pour recuperer un produit
  getProduitssoins():Observable<Produitssoins[]>{
        return this.http.get<Produitssoins[]>(URL);}
     
        // pour ajouter un Produitssoins
  addProduitssoins(p:Produitssoins):Observable<Produitssoins>{
      return this.http.post<Produitssoins>(URL, p);
        }

 //pour supprimer un Produitssoins
  deleteProduitssoins(id:number){
      return this.http.delete(URL+"/"+ id);
        }

//modifer un Produitssoins
  updateProduitssoins(id:number, p:Produitssoins):Observable<Produitssoins>{
       return this.http.put<Produitssoins>(URL+"/"+ id, p);
        }

//recuperer Produitssoins par son id 
  getProduitssoinsByid(id:number):Observable<Produitssoins>{
     return this.http.get<Produitssoins>(URL+"/"+id)
      }
}
