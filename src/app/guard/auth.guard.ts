import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from "../service/authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(public authService:AuthenticateService, public router: Router){
 }
 canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if(this.authService.isLoggedIn !== true) {
    this.router.navigate(['home'])
  }
  return true;
}
  
}
