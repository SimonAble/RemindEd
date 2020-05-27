import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LoginComponent } from './login/login.component';
import { NavLoginComponent } from './login/nav-login/nav-login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
   declarations: [
      AppComponent,
      TopNavigationComponent,
      LoginComponent,
      NavLoginComponent,
      LayoutComponent,
      SidebarComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      LoginService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
