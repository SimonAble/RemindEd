//Angular imports
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { SafePipe } from './safe.pipe';

//Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatSnackBarModule, MatProgressSpinnerModule, MatProgressBarModule, MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material/';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

//App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Top Navigation
import { TopNavigationComponent } from './Layout/TopNavigation/TopNavigation.component';
import { TopNavLoginComponent } from './Authentication/TopNavLogin/TopNavLogin.component';

//Authentication
import { LoginModalComponent } from './Authentication/LoginModal/LoginModal.component';
import { RegistrationModalComponent } from './Authentication/RegistrationModal/RegistrationModal.component';
import { AuthGuardService } from './Authentication/AuthGuard.service';
import { ErrorInterceptorProvider } from './CoreServices/Error.Interceptor';

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
import { QuizEditorComponent } from './CoreComponents/QuizEditor/QuizEditor.component';
import { MultipleChoiceComponent } from './CoreComponents/QuizEditor/QuizEditorComponents/MultipleChoice/MultipleChoice.component';
import { CheckAllAnswersComponent } from './CoreComponents/QuizEditor/QuizEditorComponents/CheckAllAnswers/CheckAllAnswers.component';
import { EssayComponent } from './CoreComponents/QuizEditor/QuizEditorComponents/Essay/Essay.component';

//User Management
import { DashboardComponent } from './InternalViews/Dashboard/Dashboard/Dashboard.component';
import { FollowingComponent } from './InternalViews/Dashboard/Following/Following.component';
import { ProfileManagementComponent } from './InternalViews/Dashboard/ProfileManagement/ProfileManagement.component';
import { UserSettingsComponent } from './InternalViews/Dashboard/UserSettings/UserSettings.component';
import { MyTeachingComponent } from './InternalViews/Dashboard/MyTeaching/MyTeaching.component';
import { MyLearningComponent } from './InternalViews/Dashboard/MyLearning/MyLearning.component';
import { MyResourcesComponent } from './InternalViews/Dashboard/MyResources/MyResources.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    MyLearningComponent,
    MyTeachingComponent,
    FollowingComponent,
    ProfileManagementComponent,
    UserSettingsComponent,
    MyResourcesComponent,
    SafePipe,
    QuizEditorComponent,
    MultipleChoiceComponent,
    CheckAllAnswersComponent,
    EssayComponent
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
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  entryComponents: [
    LoginModalComponent,
    RegistrationModalComponent,
    LearningModuleModalComponent
  ],
  providers: [
    Title,
    AuthGuardService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
