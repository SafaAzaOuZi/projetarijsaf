import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produitshygienes } from './produitshygienes';

// naamlha bch kif nhot e lien hedha fl google yjybli l page mteay li hajti  beha
const URL = "http://localhost:3000/produitshygienes";

@Injectable({
  providedIn: 'root'
})
export class ProduitshygienesService {

  constructor(private http: HttpClient) { }
  //get pour recuperer un produit
  getProduitshygienes():Observable<Produitshygienes[]>{
        return this.http.get<Produitshygienes[]>(URL);}
     
        // pour ajouter un Produitshygienes
  addProduitshygienes(a:Produitshygienes):Observable<Produitshygienes>{
      return this.http.post<Produitshygienes>(URL,a);
        }

 //pour supprimer un Produitshygienes
  deleteProduitshygienes(id:number){
      return this.http.delete(URL+"/"+ id);
        }

//modifer un Produitshygienes
  updateProduitshygienes(id:number, a:Produitshygienes):Observable<Produitshygienes>{
       return this.http.put<Produitshygienes>(URL+"/"+ id, a);
        }

//recuperer Produitshygienes par son id 
  getProduitshygienesByid(id:number):Observable<Produitshygienes>{
     return this.http.get<Produitshygienes>(URL+"/"+id)
      }
}
