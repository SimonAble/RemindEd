import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent implements OnInit {

  public loginToggled: boolean = false;
  public loginModel: LoginModel = new LoginModel();
  public userIsLoggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

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
    this.loginService.login(this.loginModel)
      .subscribe(next => {
        console.log("Login Successfull: ", next);
        this.userIsLoggedIn = true;
      }, error => {
        console.log("Error: ", error)
      })
  }
}
