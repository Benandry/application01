import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UpdateUpComponent } from './update-up/update-up.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { CrudUserComponent } from './crud-user/crud-user.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './store/header/header.component';
import { HomeStoreComponent } from './store/home-store/home-store.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserListingComponent,
    UpdateUpComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerUpdateComponent,
    CrudUserComponent,
    StoreComponent,
    HeaderComponent,
    HomeStoreComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
