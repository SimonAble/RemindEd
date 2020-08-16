import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout.component';
import { CreateLectureLayoutComponent } from './InternalViews/CreateView/CreateLectureLayout/CreateLectureLayout.component';
import { ExternalHomeComponent } from './GlobalViews/ExternalHome/ExternalHome.component';
import { CreateCourseComponent } from './InternalViews/CreateView/CreateCourse/CreateCourse.component';
import { CreateArticleLayoutComponent } from './InternalViews/CreateView/CreateArticleLayout/CreateArticleLayout.component';
import { DashboardComponent } from './InternalViews/Dashboard/Dashboard/Dashboard.component';
import { UserSettingsComponent } from './InternalViews/Dashboard/UserSettings/UserSettings.component';
import { ProfileManagementComponent } from './InternalViews/Dashboard/ProfileManagement/ProfileManagement.component';
import { AuthGuardService } from './Authentication/AuthGuard.service';
import { MyLearningComponent } from './InternalViews/Dashboard/MyLearning/MyLearning.component';
import { MyTeachingComponent } from './InternalViews/Dashboard/MyTeaching/MyTeaching.component';
import { MyResourcesComponent } from './InternalViews/Dashboard/MyResources/MyResources.component';
import { FollowingComponent } from './InternalViews/Dashboard/Following/Following.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ExternalHomeComponent },
  { path: 'learn', component: LearnLayoutComponent},
  { path: 'create', component: CreateCourseComponent},
  { path: 'create/course', component: CreateLectureLayoutComponent},
  { path: 'create/article', component: CreateArticleLayoutComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/mylearning', component: MyLearningComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/myteaching', component: MyTeachingComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/following', component: FollowingComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/myresources', component: MyResourcesComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileManagementComponent, canActivate: [AuthGuardService] },
  { path: 'profile/settings', component: UserSettingsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
