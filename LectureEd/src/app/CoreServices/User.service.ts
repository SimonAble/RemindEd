import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../Authentication/Authentication.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserContext } from '../CoreModels/UserContext.model';
import { User } from '../CoreModels/User.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public getUserContext(username:string):Observable<UserContext> {
    return this.http.get<UserContext>(this.baseUrl + 'GetUserContext/' + username);
  }

  public getUserById(userId:number):Observable<User>{
    console.log("Getting user for id: " + userId);
    console.log(this.baseUrl + 'GetUserById/' + userId);
    return this.http.get<User>(this.baseUrl + 'GetUserById/' + userId);
  }

  public getUsers():Observable<UserContext[]> {
    return this.http.get<UserContext[]>(this.baseUrl);
  }

  public saveUser(user:User):Observable<User> {
    return this.http.post<User>(this.baseUrl + 'SaveUser/', user);
  }
}
