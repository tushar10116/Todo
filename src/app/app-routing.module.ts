import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
     { path:'', redirectTo:'dashboard',pathMatch:'full'},
      {path:'aboutUs',component:AboutUsComponent,canActivate:[AuthGuard]  },
      {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}]
  },
  { path: 'login', component: LoginComponent },
  {path:'**', redirectTo:'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
