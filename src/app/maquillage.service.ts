import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquillage } from './maquillage';
const URL = "http://localhost:3000/maquillages";
@Injectable({
  providedIn: 'root'
})
export class MaquillageService {
 // getMaquillage(){
   //  return this.getMaquillages;
 //}
  //lesMaq:Maquillage[];
 constructor(private http: HttpClient) { }
 //getProductByNom(nom : string) {
  //const result = this.lesMaq.filter(x => x.nom === nom);
  //return result;
  //}

 getMaquillages():Observable<Maquillage[]>{
   return this.http.get<Maquillage[]>(URL);
   }
   addMaquillage(m:Maquillage):Observable<Maquillage>{
     return this.http.post<Maquillage>(URL, m);
     }
     deleteMaquillage(id:number){
       return this.http.delete(URL+"/"+ id);
       }
 //getParfumById(id: number): Observable<Parfum> {
   //return this.http.get<Parfum>(`${this.URL}/${id}`);
 //}
    updateMaquillage(id:number, M:Maquillage):Observable<Maquillage>{
     return this.http.put<Maquillage>(URL+"/"+ id, M);
 }
 getMaquillageByid(id:number):Observable<Maquillage>{
   return this.http.get<Maquillage>(URL+"/"+id)
 }
}