import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
const URL = "http://localhost:3000/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  //admin=["safaarij","safaarijmdp"];
  change(pass:string):Observable<User>
  {
    let x:User
    x.nom="safaarij"
    x.password="safaarijmdp"
    x.id=1
    return this.http.put<User>(URL+"/"+x.id,x);
  }
  getAdmin():Observable<User[]>{
    return this.http.get<User[]>(URL);
    }
  updateAdmin(id:number, u:User):Observable<User>{
      return this.http.put<User>(URL+"/"+ id, u);
      } 
      getByLogin(username:string,password:string):Observable<User>{
        return this.http.get<User>(URL+"?nom="+username+"&password="+password);
      }
}
