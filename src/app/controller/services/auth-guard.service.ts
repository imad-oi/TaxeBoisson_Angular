import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate{

  constructor(private authService : AuthService , private route : Router ){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean>
  {
    if(this.authService.isAuth){
      return true ;
    }
    else{
      this.route.navigate(['/auth']) ;
      return false ;
    }
  }
}
