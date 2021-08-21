/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Creating guarding routes on enhanced-secure-profile app.
=====================================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//Add import statement for router
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  //Add constructor
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 //Create isLoggedIn variable
 let isLoggedIn = next.queryParams.isLoggedIn;
 //isLoggedIn is true, return true
 if (isLoggedIn){
   return true;
   //Else if isLoggedIn returns false, navigate to sign-in page.
 } else {
   this.router.navigate(['/']);
   return false;
   }
  }
}
