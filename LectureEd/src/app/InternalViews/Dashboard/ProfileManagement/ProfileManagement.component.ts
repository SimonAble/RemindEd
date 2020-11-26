import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { UserService } from 'src/app/CoreServices/User.service';
import { User } from 'src/app/CoreModels/User.model';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { PhotoUploadModalComponent } from 'src/app/CoreComponents/PhotoUploadModal/PhotoUploadModal.component';
import { MatDialog } from '@angular/material';

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
    private materialService: MaterialService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.authService.activeUser.id)
      .subscribe(
        (user: User) => {
          this.user = user
          console.log("Profile Management: Retrieved user: "+ JSON.stringify(this.user));

          this.user.photos.forEach(photo => {
            if (photo.isProfilePicture) {
              this.user.profilePhotoUrl = photo.url;
            }
            if(photo.isProfileBackground) {
              console.log("Background Found");
              this.user.backgroundPhotoUrl = photo.url;
            }
            if(!this.user.backgroundPhotoUrl) {
              this.user.backgroundPhotoUrl = 'https://picsum.photos/1920/1080?random';
            }
          });
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

  public setNewPhoto(profilePhotoUrl: string) {
    this.user.profilePhotoUrl = profilePhotoUrl;
  }

  public openProfilePhotoUploadModal() {
    const dialogRef = this.dialog.open(PhotoUploadModalComponent, {
      width: '600px',
      data: {
        title: 'Change Profile Picture',
        currentPhotoUrl: this.user.profilePhotoUrl,
        photoApiSignature: 'ProfilePhoto'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.user.profilePhotoUrl = result;
      }
    });
  }

  public openBackgroundPhotoUploadModal() {
    const dialogRef = this.dialog.open(PhotoUploadModalComponent, {
      width: '600px',
      data: {
        title: 'Change Background Picture',
        currentPhotoUrl: this.user.backgroundPhotoUrl,
        photoApiSignature: 'BackgroundPhoto'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.user.backgroundPhotoUrl = result;
      }
    });
  }
}
