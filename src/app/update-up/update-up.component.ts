import { Component,OnInit,Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-update-up',
  templateUrl: './update-up.component.html',
  styleUrls: ['./update-up.component.scss']
})
export class UpdateUpComponent implements OnInit {

  constructor(
    private builder : FormBuilder,
    private service : AuthService,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private toastr : ToastrService,
    private dialog : MatDialogRef<UpdateUpComponent>
  ) {

  }
  
  roleList : any;
  editData : any;
  
  ngOnInit(): void {
    this.service.getAllRole().subscribe( res => {
      this.roleList = res;
    })

    if (this.data.user_code != null && this.data.user_code !="") {
      this.service.getByCode(this.data.user_code).subscribe( res => {
        this.editData = res;
        this.editForm.setValue(  {
            id:this.editData.id,
            name : this.editData.name,
            password : this.editData.password,
            email : this.editData.email,
            gender : this.editData.gender,
            role : this.editData.role,
            isActive : this.editData.isActive
           }
        )
      })
    }
  }

  editForm = this.builder.group({
    id : this.builder.control(''),
    name : this.builder.control(''),
    password : this.builder.control(''),
    email : this.builder.control('',),
    gender : this.builder.control('male'),
    role : this.builder.control('',Validators.required),
    isActive : this.builder.control(false,Validators.required),
 })

 updateUser() {
  if (this.editForm.valid) {
    this.service.updateUser(this.editForm.value.id ,this.editForm.value).subscribe( res => {
      this.toastr.success("Modification de role reussite");
      this.dialog.close();
    });
  }
  else{
    this.toastr.warning("Selectionner un de ces roles");
  }
 }

}
