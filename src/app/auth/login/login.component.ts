import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  public form={
    email: null,
    password:null
  };

  constructor(
    private auth:AuthService,
    private token: TokenService,
    private router: Router,
    ) { }
    private error=null;

  onSubmit(){
    this.auth.login(this.form).subscribe(
      data=> this.loginHandel(data),
      error=>this.errorHandel(error),
    );    
  }

  loginHandel(data){
    this.token.handel(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  errorHandel(error){
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
