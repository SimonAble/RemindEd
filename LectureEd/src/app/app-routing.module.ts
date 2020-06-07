import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Authentication/Registration/Registration.component';
import { LearnLayoutComponent } from './InternalViews/LearnView/LearnLayout/LearnLayout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'learn', component: LearnLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
