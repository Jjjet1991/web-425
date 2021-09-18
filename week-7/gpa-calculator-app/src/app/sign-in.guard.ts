/*
=====================================================
; Title: Assignment 7.3 Form Validation
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Add data validation to the gpa-calculator-app, sign-in page.
=====================================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
