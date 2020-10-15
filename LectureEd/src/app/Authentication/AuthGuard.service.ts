import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService as AuthGuard} from './Authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authenticationService: AuthGuard, public router: Router) { }

  public canActivate() {
    if(!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
