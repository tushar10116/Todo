import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
   if(this.loginService.logout())
      this.router.navigate(['/login'])
  }
}
