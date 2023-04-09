import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  apiUrl = "http://localhost:3000/users";

  getAll() {
    return this.http.get(this.apiUrl)
  }

  getAllRole() {
    return this.http.get("http://localhost:3000/role");
  }
   

  getByCode(code : any ){
    return this.http.get(this.apiUrl+'/'+code);
  }

  // proceedRegister(inputData : any ){
  //   console.log(this.http.post("http://localhost:3200/users/new",inputData));
  //   return this.http.post("http://localhost:3200/users/new",inputData);
  // }

   proceedRegister(inputData : any ){
    return this.http.post(this.apiUrl,inputData);
  }

  updateUser(id : any , inputData : any ){
    return this.http.put(this.apiUrl+'/'+id,inputData);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  getUserRole() {
    return sessionStorage.getItem('userrole') != null ?  sessionStorage.getItem('userrole') ?.toString() : '';
  }

  // getUserCurrent ()
}
