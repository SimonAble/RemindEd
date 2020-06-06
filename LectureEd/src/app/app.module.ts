import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './Layout/TopNavigation/TopNavigation.component';
import { TopNavLoginComponent } from './Authentication/TopNavLogin/TopNavLogin.component';
import { RegistrationComponent } from './Authentication/Registration/Registration.component';
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout/LearnLayout.component';
import { LearnLeftMenuComponent } from './InternalViews/LearnView/LearnLeftMenu/LearnLeftMenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    TopNavLoginComponent,
    RegistrationComponent,
    LearnLayoutComponent,
    LearnLeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
