import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Login.model';
import { AuthenticationService } from '../Authentication.service';
import { LoginModalComponent } from '../LoginModal/LoginModal.component';
import { MatDialog, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { RegistrationModalComponent } from '../RegistrationModal/RegistrationModal.component';
import { RegistrationModel } from '../Registration.model';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';

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
    private materialService: MaterialService,
    public dialog: MatDialog,
    private router: Router) { }

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
        this.materialService.openSnackBar("Login Succesful!")
      }, error => {
        console.log("Error: ", error)
        this.materialService.openSnackBar(error, SnackBarStateClass.Error)
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
        this.materialService.openSnackBar("Registration Succesful!")
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
   * Logs the user out of the application
   */
  public logout() {
    localStorage.removeItem('token');
    this.loginToggled = false;
    console.log("User Logged Out");

    this.materialService.openSnackBar("Logout Succesful!")
  }

  public navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }

  public navigateToProfile() {

  }

  public navigateToCreateArticle() {

  }

  public navigateToCreateCourse() {

  }

  public navigateToMyCoursesAndArticles() {

  }

  public navigateToFollowing() {

  }

  public navigateToSavedResources() {

  }
}
