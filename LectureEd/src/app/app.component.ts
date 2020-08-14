import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from './Authentication/Authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public helper = new JwtHelperService();

  public constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService ) {
    this.setTitle("CoLab");
  }

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token) {
      this.authenticationService.decodedToken = this.helper.decodeToken(token);
      this.authenticationService.userName = this.authenticationService.decodedToken['unique_name'];
    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
