import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Login.model';
import { AuthenticationService } from '../Authentication.service';

@Component({
  selector: 'app-TopNavLogin',
  templateUrl: './TopNavLogin.component.html',
  styleUrls: ['./TopNavLogin.component.css']
})
export class TopNavLoginComponent implements OnInit {

  public loginToggled: boolean = false;
  public loginModel: LoginModel = new LoginModel();
  public userIsLoggedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public toggleLogin() {
    if(this.loginToggled) {
      this.loginToggled = false;
    }
    else {
      this.loginToggled = true;
    }
  }

  /**
   * Login Method with Service Call to API and subscription to JWTBearer Tokens
   */
  public login() {
    console.log(this.loginModel);
    this.authenticationService.login(this.loginModel)
      .subscribe(
        next => {
        console.log("Login Successfull: ", next);
        this.userIsLoggedIn = true;
      }, error => {
        console.log("Error: ", error)
      })
  }

  /**
   * Login check identifies whether the user has a valid login token
   */
  public loginCheck() {
    const token = localStorage.getItem('token');
    //returns true if token is present
    return !!token;
  }

  /**
   * Logs the user out of the application
   */
  public logout() {
    localStorage.removeItem('token');
    this.loginToggled = false;
    console.log("User Logged Out");
  }

}
