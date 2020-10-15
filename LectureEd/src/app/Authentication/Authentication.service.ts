import { Injectable } from '@angular/core';
import { LoginModel } from './Login.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegistrationModel } from './Registration.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserContext } from '../CoreModels/UserContext.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.apiUrl + 'auth/';
  public decodedToken: any;
  public helper = new JwtHelperService();
  public activeUser: UserContext = new UserContext();

  constructor(private http: HttpClient) {
  }

    public register(registrationModel: RegistrationModel) {
      console.log("Registering");
      return this.http.post(this.baseUrl + 'register', registrationModel)
        .pipe(
          map((res: any) => {
            const user = res;

            if(user) {
              localStorage.setItem('token', user.token);
              this.activeUser = user;
              console.log("Active User: " + JSON.stringify(this.activeUser));
            }
          })
        )
    }

    public login(loginModel:LoginModel) {
      console.log("Logging in");
      return this.http.post(this.baseUrl + 'login', loginModel)
        .pipe(
          map((res: any) => {
            const user = res;
            if(user) {
              localStorage.setItem('token', user.token);
              this.activeUser = user;
              console.log("Active User: " + JSON.stringify(this.activeUser));
            }
          })
        )
    }

    public isAuthenticated() {
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token');
      const isExpired = helper.isTokenExpired(token);

      return !isExpired;
    }
}
