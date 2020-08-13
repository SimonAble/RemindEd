import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Login.model';
import { AuthenticationService } from '../Authentication.service';
import { LoginModalComponent } from '../LoginModal/LoginModal.component';
import { MatDialog, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { RegistrationModalComponent } from '../RegistrationModal/RegistrationModal.component';
import { RegistrationModel } from '../Registration.model';

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

  constructor(
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

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
        this.openSnackBar("Login Succesful!")
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
        this.openSnackBar("Registration Succesful!")
      }, error => {
        console.log("Error: ", error)
      })
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loginModel.username = result.email;
      this.loginModel.password = result.password;

      if(this.loginModel) {
        this.login();
      }
    });
  }

  openRegistrationModal() {
    const dialogRef = this.dialog.open(RegistrationModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.registrationModel.username = result.email;
      this.registrationModel.password = result.password;

      if(this.registrationModel) {
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

    this.openSnackBar("Logout Succesful!")
  }

  public openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['snackbarSuccess'];
    config.duration = 2000;
    this._snackBar.open(message, "Close", config);
  }

}
