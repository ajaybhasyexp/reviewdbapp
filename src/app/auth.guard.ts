import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './Services/auth.service';
import {Router} from '@angular/router';
import { Constants } from './constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private myRoute: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){
      return true;
    }
    else{
      this.myRoute.navigate([Constants.Navigations.login]);
      return false;
    }
  }
}
