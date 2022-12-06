import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private authentificationService:AuthentificationService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  CanActivate(){
    if(this.authentificationService.role=='Autre'){
      this.router.navigate(['/Seconnecter']);
    }
    
  }
}
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //let role = this.authentification.role;
//     if(role =='seconnecter')
//      return true;
// else{
// this.router.navigate(['/seconnecter']);
// return false;
// }
//   }
  
// }
