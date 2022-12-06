import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parfum } from './parfum';
const URL = "http://localhost:3000/parfums";
@Injectable({
  providedIn: 'root'
})
export class ParfumService {

  // lesParfums:Parfum[]=[
  //   new Parfum (20191,"Glamour","assets/Glamour.gif",59.00,true,new Date('2018'),"femme","eau de parfum","Arvea Nature" ),
  //   new Parfum (20190,"Harem",'assets/harem.jpg',68.00,true,new Date('2018'),"femme","eau de parfum","Arvea Nature" ),
  //   new Parfum (20192,"Mystery GIRL",'assets/mystery GIRL.jpg',58.00,true,new Date('2018'),"femme","eau de parfum","Arvea Nature" ),
  //   new Parfum (20334,"Velvet",'assets/velvet.jpg',99.00,true,new Date('2018'),"femme","parfum","Arvea Nature" )
  // // ];
  // getParfum(){
  //    // return this.getParfums;
  // }

  constructor(private http: HttpClient) { }
//get pour recuperer un parfum
  getParfums():Observable<Parfum[]>{
    return this.http.get<Parfum[]>(URL);
    }
    // pour ajouter un parfum
  addParfum(p:Parfum):Observable<Parfum>{
         return this.http.post<Parfum>(URL, p);
          }
      //pour supprimer un parfum
  deleteParfum(id:number){
           return this.http.delete(URL+"/"+ id);
            }
     //modifer un parfum
  updateParfum(id:number, p:Parfum){
    return this.http.put<Parfum>(`${URL}/${id}`,p)
         // return this.http.put<Parfum>(URL+"/"+ id, p);
      }
  //recuperer parfum par son id 
  getParfumByid(id:number):Observable<Parfum>{
        return this.http.get<Parfum>(URL+"/"+id);
        }
}
