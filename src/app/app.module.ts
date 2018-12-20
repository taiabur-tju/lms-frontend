import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { RequestPasswordResetComponent } from './components/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/response-password-reset/response-password-reset.component';
import { RequestPasswordMessageComponent } from './components/request-password-message/request-password-message.component';
import { ResponsePasswordMessageComponent } from './components/response-password-message/response-password-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RequestPasswordResetComponent,
    ResponsePasswordResetComponent,
    RequestPasswordMessageComponent,
    ResponsePasswordMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BeforeLoginService,AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
