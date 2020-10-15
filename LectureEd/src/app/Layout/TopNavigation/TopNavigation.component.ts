import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';

@Component({
  selector: 'app-TopNavigation',
  templateUrl: './TopNavigation.component.html',
  styleUrls: ['./TopNavigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  public loginToggled: boolean = true;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
