import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './login.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:5000/api/auth/"

constructor(private http: HttpClient) { }

  public login(loginModel:LoginModel) {
    console.log("Logging in:");
    console.log(JSON.stringify(loginModel));
    return this.http.post('http://localhost:5000/api/auth/login', loginModel)
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
