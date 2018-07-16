import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // tslint:disable-next-line:max-line-length
      if ((localStorage.getItem('role') === 'LC' || localStorage.getItem('role') === 'REP' || localStorage.getItem('role') === 'ADMIN') && localStorage.getItem('token') != null ) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
