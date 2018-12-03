import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './auth/create-user/create-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'create-user',component:CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
