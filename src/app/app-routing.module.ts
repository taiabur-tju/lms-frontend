import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { RequestPasswordResetComponent } from './components/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/response-password-reset/response-password-reset.component';
import { RequestPasswordMessageComponent } from './components/request-password-message/request-password-message.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[BeforeLoginService],
    children:[
      {
        path:'login',
        component:LoginComponent,
        canActivate:[BeforeLoginService]
      },
      {
        path:'signup',
        component:SignupComponent,
        canActivate:[BeforeLoginService]
      },
      {
        path:'request-password-reset',
        component: RequestPasswordResetComponent,
        canActivate: [BeforeLoginService]
      },
      {
        path:'request-password-message',
        component: RequestPasswordMessageComponent,
        canActivate: [BeforeLoginService]
      },
      {
        path:'response-password-reset',
        component:ResponsePasswordResetComponent,
        canActivate:[BeforeLoginService]
      },
      {
        path:'response-password-message',
        component: RequestPasswordMessageComponent,
        canActivate: [BeforeLoginService]
      },
    ]
  },
  {
    path:'',
    canActivate:[AfterLoginService],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [AfterLoginService],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
