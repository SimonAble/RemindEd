import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from './Authentication/Authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './CoreServices/User.service';
import { MaterialService } from './CoreServices/Material.service';
import { SnackBarStateClass } from './CoreModels/enum';
import { UserContext } from './CoreModels/UserContext.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public helper = new JwtHelperService();

  public constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private materialService: MaterialService
     ) {
    this.setTitle("CoLab");
  }

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(this.authenticationService.isAuthenticated()) {
      this.authenticationService.decodedToken = this.helper.decodeToken(token);
      const username = this.authenticationService.decodedToken['unique_name'];
      const userId = this.authenticationService.decodedToken['nameid'];
      this.authenticationService.activeUser.id = userId;

      this.getUserContext(username);
    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  public getUserContext(username: string) {
    this.userService.getUserContext(username)
      .subscribe(
        (userContext: UserContext) => {
          this.authenticationService.activeUser = userContext;
          console.log(JSON.stringify(this.authenticationService.activeUser));
         },
        error => {
          console.log("Error: ", error);
          this.materialService.openSnackBar(error, SnackBarStateClass.Error);
        }
      )
  }
}
