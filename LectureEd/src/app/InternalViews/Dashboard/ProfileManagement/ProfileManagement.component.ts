import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { UserService } from 'src/app/CoreServices/User.service';
import { User } from 'src/app/CoreModels/User.model';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';
import { MaterialService } from 'src/app/CoreServices/Material.service';

@Component({
  selector: 'app-ProfileManagement',
  templateUrl: './ProfileManagement.component.html',
  styleUrls: ['./ProfileManagement.component.css']
})
export class ProfileManagementComponent implements OnInit {

  public user: User = new User();
  public showDelay = 800;

  constructor(
    private authService:AuthenticationService,
    private userService: UserService,
    private materialService: MaterialService,) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.authService.activeUser.id)
      .subscribe(
        (user: User) => {
          this.user = user
          console.log("Retrieved user: "+ JSON.stringify(this.user));
        },
        error => {
          console.log("Error: ", error)
          this.materialService.openSnackBar("Hmm, we couldn't find your user data...", SnackBarStateClass.Error)
        });
  }

  public navigateToSettings() {

  }

  public saveProfile() {
    this.userService.saveUser(this.user)
      .subscribe(
        next => {
          this.materialService.openSnackBar("Profile Information Saved")
        },
        error => {
          console.log("Error: ", error)
          this.materialService.openSnackBar("We couldn't save your information. " + error, SnackBarStateClass.Error)
        })
  }

}
