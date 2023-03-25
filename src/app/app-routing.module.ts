import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
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
  { component: CustomerComponent , path : "customer" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
