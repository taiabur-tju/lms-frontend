import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-password-message',
  templateUrl: './request-password-message.component.html',
  styleUrls: ['./request-password-message.component.css']
})
export class RequestPasswordMessageComponent implements OnInit {
  private email=null;
  constructor(private route:ActivatedRoute) {
    route.queryParams.subscribe(pramrs=>{
      this.email=pramrs['email'];
    })
   }

  ngOnInit() {
  }

}
