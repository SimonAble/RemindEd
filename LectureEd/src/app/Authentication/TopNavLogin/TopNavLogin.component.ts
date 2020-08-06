import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Login.model';
import { AuthenticationService } from '../Authentication.service';
import { LoginModalComponent } from '../LoginModal/LoginModal.component';
import { MatDialog } from '@angular/material';
import { RegistrationModalComponent } from '../RegistrationModal/RegistrationModal.component';
import { RegistrationModel } from '../Registration.model';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-TopNavLogin',
  templateUrl: './TopNavLogin.component.html',
  styleUrls: ['./TopNavLogin.component.css']
})
export class TopNavLoginComponent implements OnInit {

  public loginToggled: boolean = false;
  public loginModel: LoginModel = new LoginModel();
  public registrationModel: RegistrationModel = new RegistrationModel();
  public userIsLoggedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) { }

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
      }, error => {
        console.log("Error: ", error)
      })
  }

   /**
   * Registration Method with Service Call to API and subscription to JWTBearer Tokens
   */
  public register() {
    console.log(this.loginModel);
    this.authenticationService.register(this.registrationModel)
      .subscribe(
        next => {
        console.log("Registration Successfull: ", next);
      }, error => {
        console.log("Error: ", error)
      })
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.loginModel.username = result.email;
      this.loginModel.password = result.password;
      console.log("Username: ", this.loginModel.username, " Password: ", this.loginModel.password);

      if(this.loginModel) {
        console.log("Logging in user:");
        this.login();
      }
      //this.city = result;
      //this.food_from_modal = result.food;
    });
  }

  openRegistrationModal() {
    const dialogRef = this.dialog.open(RegistrationModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.registrationModel.username = result.email;
      this.registrationModel.password = result.password;
      console.log("Username: ", this.registrationModel.username, " Password: ", this.registrationModel.password);

      if(this.registrationModel) {
        console.log("Registering user:");
        this.register();
      }
    });
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
