import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loggedIn : boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value=> this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }

}
