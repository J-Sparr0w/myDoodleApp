import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roomLink = sessionStorage.getItem('roomLink');
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    const roomId = route.paramMap.get('roomId')!;
    console.log(`roomId in authGuard: ${roomId}`);

    if (!roomLink && !isLoggedIn) {
      console.log("route redirected")
      this.router.navigate(['hub'],{queryParams:{roomId:roomId}});

}
    return true;
  }

}
