import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    localStorage.setItem(Constants.SrtingConstants.loggedInStorageKey, token)
  }

  getToken() {
    return localStorage.getItem(Constants.SrtingConstants.loggedInStorageKey)
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  setLoggedInUser(loggedInUser: string){
    localStorage.setItem(Constants.SrtingConstants.loggedInUser, loggedInUser)
  }

  getLoggedInUser() {
    return localStorage.getItem(Constants.SrtingConstants.loggedInUser)
  }

  logout() {
    localStorage.removeItem(Constants.SrtingConstants.loggedInStorageKey);
    this.myRoute.navigate([Constants.Navigations.login]);
  }


}
