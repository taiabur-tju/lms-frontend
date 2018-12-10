import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { LeaveRequestComponent } from './user/leave-request/leave-request.component';
import { LeaveListComponent } from './user/leave-list/leave-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'leave-request',component:LeaveRequestComponent},
  {path:'leave-list',component:LeaveListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
