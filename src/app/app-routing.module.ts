import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUserComponent } from './crud-user/crud-user.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { StoreComponent } from './store/store.component';
import { HomeStoreComponent } from './store/home-store/home-store.component';

const routes: Routes = [
  {path : '',component : HomeComponent,canActivate: [AuthGuard]},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'user-list',component : UserListingComponent,canActivate : [AuthGuard]},
  { component: CustomerComponent , path : "customer" },
  { component : CrudUserComponent , path : "crud" },
  // THis is route for all module of store 
  { component : StoreComponent, path: 'store',canActivate : [AuthGuard] },
  { component : HomeStoreComponent , path : 'home-store'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
