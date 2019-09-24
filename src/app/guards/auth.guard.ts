import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)

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
