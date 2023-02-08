import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginError: boolean = false


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn())
    {
      this.router.navigate(['dashboard'])
    }

  }

  login() {



    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      if (this.loginService.isLoggedIn()) {
        this.router.navigate(['dashboard'])
      }
      else {
        this.loginError = true
      }
    }
    else {

      this.loginError = true
    }

  }
}
