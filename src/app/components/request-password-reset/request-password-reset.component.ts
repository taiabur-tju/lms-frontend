import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.css']
})
export class RequestPasswordResetComponent implements OnInit {
  public form={
    email:null,
  };
  public error=null;
  public message=null;
  constructor(
    private auth: AuthService,
    private router: Router,
    ) { }

  onSubmit(){
    this.error=null;
    this.auth.requestPasswordReset(this.form).subscribe(
      data=> this.requestPassword(data),
      error=>this.errorHandel(error),
    );
  }

  requestPassword(data){
    // console.log(data);
    this.router.navigateByUrl('/request-password-message?email='+data.email);
  }
  
  errorHandel(error){
    this.error=error.error.error;
  }
  messageHandel(message){
    this.message=message.message;
  }
  
  ngOnInit() {
  }

}
