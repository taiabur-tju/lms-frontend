import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Token=new TokenService();
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus= this.loggedIn.asObservable();

  private baseUrl='http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseUrl}signup`,data);
  }

  login(data){
    return this.http.post(`${this.baseUrl}login`,data);
  }
  changeAuthStatus(value:boolean){
    this.loggedIn.next(value);
  }
  requestPasswordReset(data){
    return this.http.post(`${this.baseUrl}requestPasswordReset`,data);
  }
  resetPassword(data){
    return this.http.post(`${this.baseUrl}resetPassword`,data);
  }
}
