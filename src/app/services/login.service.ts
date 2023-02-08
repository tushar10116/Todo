import { Injectable } from '@angular/core';
import { publicEncrypt } from 'crypto';
import { encode } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }

  loginUser(username: string, password: string): boolean {
    

    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('token', username + password)

      return true;
    }
    return false;

  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')!==null) {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token')
    
    
    
    return true
  }



}
