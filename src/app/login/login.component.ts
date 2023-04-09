import { Component } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private builder : FormBuilder,
    private toastr : ToastrService,
    private auth : AuthService,
    private router : Router
  ){
    sessionStorage.clear();
  }

  userData : any;

  loginForm = this.builder.group({
    username : this.builder.control('',Validators.required),
    password : this.builder.control('',Validators.required),
  })

  proceedLogin(){

    if (this.loginForm.valid) {
      this.auth.getByCode(this.loginForm.value.username).subscribe( res => {
        this.userData = res;

        if (this.userData.password === this.loginForm.value.password) {
          if (this.userData.isActive) {
            sessionStorage.setItem('username',this.userData.id);
            sessionStorage.setItem('userrole',this.userData.role);
            sessionStorage.setItem('name',this.userData.name);
            sessionStorage.setItem('email',this.userData.email);
            sessionStorage.setItem('gender',this.userData.gender);
            this.router.navigate(['store']);
          }else{
            this.toastr.error("Contatez les administrateur pour activer les compte utilisateur","Compte desactiver");
          }
        }
        else{
          this.toastr.error("Information incorrect");
        }
      })
    }
    else{
        this.toastr.warning("Le donnee n'est pas valide");
    }
  }

}
