//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/';
import { DragDropModule } from '@angular/cdk/drag-drop';

//App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Top Navigation
import { TopNavigationComponent } from './Layout/TopNavigation/TopNavigation.component';
import { TopNavLoginComponent } from './Authentication/TopNavLogin/TopNavLogin.component';

//Authentication
import { RegistrationComponent } from './Authentication/Registration/Registration.component';

//External Views
import { ExternalHomeComponent } from './GlobalViews/ExternalHome/ExternalHome.component';

//Learn Views
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout.component';
import { LearnLeftMenuComponent } from './InternalViews/LearnView/LearnLeftMenu/LearnLeftMenu.component';
import { LearnLectureContentComponent } from './InternalViews/LearnView/LearnLectureContent/LearnLectureContent.component';
import { CreateLectureLayoutComponent } from './InternalViews/CreateView/CreateLectureLayout/CreateLectureLayout.component';
import { CreateLectureContentComponent } from './InternalViews/CreateView/CreateLectureContent/CreateLectureContent.component';
import { CreateLeftMenuComponent } from './InternalViews/CreateView/CreateLeftMenu/CreateLeftMenu.component';

//Create Views

@NgModule({
  declarations: [
    AppComponent,
    ExternalHomeComponent,
    TopNavigationComponent,
    TopNavLoginComponent,
    RegistrationComponent,
    LearnLayoutComponent,
    LearnLeftMenuComponent,
    LearnLectureContentComponent,
    CreateLectureLayoutComponent,
    CreateLeftMenuComponent,
    CreateLectureContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
