import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.component.html',
  styleUrls: ['./response-password-reset.component.css']
})
export class ResponsePasswordResetComponent implements OnInit {
  public error=[];
  public errors=null;
  public message=null;
  
  public form={
    password:null,
    retypepassword:null,
    resetToken:null
  };
  constructor(
    private route:ActivatedRoute,
    private auth:AuthService
  ) {
    route.queryParams.subscribe(params=>{
      this.form.resetToken=params['token'];
    })
   }
   onSubmit(){
     this.error=[];
     this.errors=null;
     this.message=null;
     this.auth.resetPassword(this.form).subscribe(
       data=>this.responseHandel(data),
       error=>this.errorHandel(error),
     )
   }
   responseHandel(data){
    this.errors=data.errors;
    this.message=data.message;
   }
   errorHandel(error){
    this.error=error.error.errors;
    
   }
  ngOnInit() {
  }

}
