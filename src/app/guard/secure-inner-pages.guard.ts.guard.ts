import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticateService } from "../service/authenticate.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuardGuard implements CanActivate {
  constructor(public authService: AuthenticateService,
    public router:Router){}
  
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggedIn) {
        window.alert("You are not allowed to access this URL!");
         this.router.navigate(['dashboard'])
      }
      return true;
    }
  
}
