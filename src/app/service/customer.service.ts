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

  getCustomerById( id : any ){
    return this.http.get(this.apiUrl+"?id="+id);
  }

  createCustomer( data : any){
    return this.http.post(this.apiUrl,data);
  }


  deleteCustomer(code : any ){
    return this.http.delete(this.apiUrl+"/"+code);
  }

  updateCustomer(code : any, data : any ){
    return this.http.put(this.apiUrl+"/"+code,data)
  }

}
