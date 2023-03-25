import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  apiUrl = "http://localhost:3000/customer";

  getAllCustomer() {
    return this.http.get(this.apiUrl);
  }

  createCustomer( data : any){
    return this.http.post(this.apiUrl,data);
  }


}
