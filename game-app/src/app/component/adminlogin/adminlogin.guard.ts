import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/controller/service/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
constructor(private auth:AuthService,
  private myRoute: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.auth.isLoggednIn()){
      return true;
    }  else{
      this.myRoute.navigate(["adminlogin"]);
      return false;
    }
  }
}