import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent {

    userArray : any[] = [];
    isResultLoad = false;
    isUpdateFormActive = false;

  name: String = "";
  first_name: String = "";
  adresse: String = "";
  email: String = "";
  password: String = "";
  password_confirm: String = "";
  role: String = "";
  gender: String = "";

  currentUserId = "";

  constructor ( private http : HttpClient){
    this.getAllUser()
  }

  proceedRegistration(){

  }

  getAllUser(){
    this.http.get("http://localhost:8085/api/users").subscribe( (resultData : any ) => {
      console.log(resultData.data);
    })
   }

}
