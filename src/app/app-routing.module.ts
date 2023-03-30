import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOutreachCircleComponent } from './pages/all-outreach-circle/all-outreach-circle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [{ path: '', component: AllOutreachCircleComponent } ]
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
