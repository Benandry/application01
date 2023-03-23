import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth : AuthService,
    private router : Router,
    private toastr : ToastrService
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isLoggedIn()) {
          if (route.url.length > 0) {
            if (route.url[0].path  == "user-list") {
              if (this.auth.getUserRole() === "admin") {
                return true;
              }else{
                this.toastr.warning("Vous n'avez pas d'access");
                this.router.navigate(['']);
                return false;
              }
            }else{
              return true;
            }
          }else{
            return true;
          }
            


        return true;
      }else{
        this.router.navigate(['/login']);
        return  false;
      }
  }
  
}
