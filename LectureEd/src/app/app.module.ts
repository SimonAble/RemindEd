//Angular imports
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

//Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatSnackBarModule } from '@angular/material/';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

//App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Top Navigation
import { TopNavigationComponent } from './Layout/TopNavigation/TopNavigation.component';
import { TopNavLoginComponent } from './Authentication/TopNavLogin/TopNavLogin.component';

//Authentication
import { LoginModalComponent } from './Authentication/LoginModal/LoginModal.component';
import { RegistrationModalComponent } from './Authentication/RegistrationModal/RegistrationModal.component';

//External Views
import { ExternalHomeComponent } from './GlobalViews/ExternalHome/ExternalHome.component';

//Learn Views
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout.component';
import { LearnLeftMenuComponent } from './InternalViews/LearnView/LearnLeftMenu/LearnLeftMenu.component';
import { LearnLectureContentComponent } from './InternalViews/LearnView/LearnLectureContent/LearnLectureContent.component';

//Create Views
import { CreateLectureLayoutComponent } from './InternalViews/CreateView/CreateLectureLayout/CreateLectureLayout.component';
import { CreateLectureContentComponent } from './InternalViews/CreateView/CreateLectureContent/CreateLectureContent.component';
import { CreateLeftMenuComponent } from './InternalViews/CreateView/CreateLeftMenu/CreateLeftMenu.component';
import { LearningModuleModalComponent } from './InternalViews/CreateView/LearningModules/LearningModuleModal/LearningModuleModal.component';
import { CreateCourseComponent } from './InternalViews/CreateView/CreateCourse/CreateCourse.component';

//Core Components
import { CoLabEditorComponent } from './CoreComponents/CoLabEditor/CoLabEditor.component';
import { CoLabViewerComponent } from './CoreComponents/CoLabViewer/CoLabViewer.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CreateArticleLayoutComponent } from './InternalViews/CreateView/CreateArticleLayout/CreateArticleLayout.component';
import { DashboardComponent } from './InternalViews/Dashboard/Dashboard/Dashboard.component';
import { MyCoursesAndArticlesComponent } from './InternalViews/Dashboard/MyCoursesAndArticles/MyCoursesAndArticles.component';
import { FollowingComponent } from './InternalViews/Dashboard/Following/Following.component';
import { ProfileManagementComponent } from './InternalViews/Dashboard/ProfileManagement/ProfileManagement.component';
import { UserSettingsComponent } from './InternalViews/Dashboard/UserSettings/UserSettings.component';
import { AuthGuardService } from './Authentication/AuthGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    ExternalHomeComponent,
    TopNavigationComponent,
    TopNavLoginComponent,
    LearnLayoutComponent,
    LearnLeftMenuComponent,
    LearnLectureContentComponent,
    CreateLectureLayoutComponent,
    CreateLeftMenuComponent,
    CreateLectureContentComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    LearningModuleModalComponent,
    CoLabEditorComponent,
    CoLabViewerComponent,
    CreateCourseComponent,
    CreateArticleLayoutComponent,
    DashboardComponent,
    MyCoursesAndArticlesComponent,
    FollowingComponent,
    ProfileManagementComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    CKEditorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  entryComponents: [
    LoginModalComponent,
    RegistrationModalComponent,
    LearningModuleModalComponent
  ],
  providers: [
    Title,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
