import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  
  
  
  ];
  

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DashboardRoutingModule { }
