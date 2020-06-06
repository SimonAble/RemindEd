import { Injectable } from '@angular/core';
import { LoginModel } from './Login.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegistrationModel } from './Registration/Registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = "http://localhost:5000/api/auth/"

  constructor(private http: HttpClient) { }

    public register(registrationModel: RegistrationModel) {
      console.log("Registering");
      return this.http.post(this.baseUrl + 'register', registrationModel);
    }

    public login(loginModel:LoginModel) {
      console.log("Logging in:");
      console.log(JSON.stringify(loginModel));
      return this.http.post(this.baseUrl + 'login', loginModel)
        .pipe(
          map((res: any) => {
            const user = res;
            if(user) {
              localStorage.setItem('token', user.token);
            }
          })
        )
    }

}
