import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class IsloggedService implements CanActivate {
  constructor(
    private cookies: CookieService,
    private dataService: DataService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let token = this.cookies.get(this.dataService.token);
    if (token) {
      console.log(token);
      return true;
    } else {
      console.log('not matched');
      return false;
    }
  }
}
