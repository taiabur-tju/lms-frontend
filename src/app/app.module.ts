import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatButtonModule} from '@angular/material';
import { MessageComponent } from './message/message.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LeaveRequestComponent } from './user/leave-request/leave-request.component';
import { LeaveListComponent } from './user/leave-list/leave-list.component';
// import {MatTableModule} from '@angular/material/table';
import{ MustMatchDirective } from './_helper/must-match.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    CreateUserComponent,
    MessageComponent,
    AdminComponent,
    UserComponent,
    LeaveRequestComponent,
    LeaveListComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
