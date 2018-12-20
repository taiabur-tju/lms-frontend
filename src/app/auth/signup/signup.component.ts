import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private error=[];
  private form={
    name:null,
    email:null,
    phone:null,
    password:null,
    retype_password:null,
  };

  constructor(
    private auth:AuthService,
    private token: TokenService,
    private router: Router,
    ) { }

  onSubmit(){
    this.auth.signup(this.form).subscribe(
      data=> this.loginHandel(data),
      error=>this.errorHandel(error),
    );    
  }

  loginHandel(data){
    this.token.handel(data.access_token);
    this.router.navigateByUrl('/dashboard');
  }

  errorHandel(error){
    this.error=error.error.errors;
  }
  ngOnInit() {
  }

}
