import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  {path : '',component : HomeComponent,canActivate: [AuthGuard]},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'user-list',component : UserListingComponent,canActivate : [AuthGuard]},
  // {path : 'profil',component : UserListingComponent,canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
