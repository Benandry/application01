import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesAccessService {

  constructor(private http : HttpClient) { }

  urlApiRoleAcces = "http://localhost:3000/roleacces";
  getRoleAccess(role : any,menu : any){
    return this.http.get(this.urlApiRoleAcces+"?role="+role+"&menu="+menu);
  }
}
