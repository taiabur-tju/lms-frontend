import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss={
    'login':'http://127.0.0.1:8000/api/login',
    'signup':'http://127.0.0.1:8000/api/signup'
  }
  constructor() { }

  handel(usertoken){
    this.set(usertoken);
  }

  set(usertoken){
    localStorage.setItem('token',usertoken);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload= this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1?true:false;
      }
    }
    return false;
  }

  payload(token){
    const get_payload=token.split('.')[1];
    return this.decode(get_payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}

