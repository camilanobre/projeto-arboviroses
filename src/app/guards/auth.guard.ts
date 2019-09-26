import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, 
          CanActivateChild, CanLoad, Route, Router, 
          RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService,
              private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.checkAutState(state.url);
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.canActivate(route, state);
}

canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>

  private checkAutState(redirect: string): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      tap(is => {
        if(!is){
          this.router.navigate(['/login'], {
            queryParams: { redirect }
          });
        }
      })
    );
  }
  
}
