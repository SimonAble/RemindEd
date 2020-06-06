import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from './Registration.model';
import { AuthenticationService } from '../Authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationModel: RegistrationModel = new RegistrationModel();
  public passwordVerification: any;
  public userRegistered: boolean;

  constructor(private registrationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public register() {
    console.log(JSON.stringify(this.registrationModel));
    this.registrationService.register(this.registrationModel)
    .subscribe(next => {
      console.log("Registration Successfull!");
      this.userRegistered = true;
    })
  }

  public navigateToInternalHome() {
    console.log("Navigating to internal home page");
    this.router.navigate(["InternalHome"])
  }


}
