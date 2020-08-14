import { Injectable } from '@angular/core';
import { LoginModel } from './Login.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegistrationModel } from './Registration.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = "http://localhost:5000/api/auth/";
  public decodedToken: any;
  public helper = new JwtHelperService();
  public userName: string;

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
              this.decodedToken = this.helper.decodeToken(user.token);
              this.userName = this.decodedToken['unique_name'];
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
              this.decodedToken = this.helper.decodeToken(user.token);
              this.userName = this.decodedToken['unique_name'];
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
