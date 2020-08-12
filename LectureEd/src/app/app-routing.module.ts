import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout.component';
import { CreateLectureLayoutComponent } from './InternalViews/CreateView/CreateLectureLayout/CreateLectureLayout.component';
import { ExternalHomeComponent } from './GlobalViews/ExternalHome/ExternalHome.component';
import { CreateCourseComponent } from './InternalViews/CreateView/CreateCourse/CreateCourse.component';
import { CreateArticleLayoutComponent } from './InternalViews/CreateView/CreateArticleLayout/CreateArticleLayout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ExternalHomeComponent },
  { path: 'learn', component: LearnLayoutComponent},
  { path: 'create', component: CreateCourseComponent},
  { path: 'create/course', component: CreateLectureLayoutComponent},
  { path: 'create/article', component: CreateArticleLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
