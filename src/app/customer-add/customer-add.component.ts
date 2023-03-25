import { Component,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {

  constructor(
    private builder : FormBuilder,
    private customer_services : CustomerService,
    private toastr : ToastrService,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private router : Router,
    private dialog : MatDialogRef<CustomerAddComponent>
    ){
      
    }

    all_customer : any;

  formCustomer = this.builder.group({
    id : this.builder.control(''),
    name : this.builder.control('',Validators.required),
    creditLimit : this.builder.control('',Validators.required)
  })

  createCustomer(){
    if(this.formCustomer.valid) {
        this.customer_services.getAllCustomer().subscribe( res => {
          this.all_customer = res
          if (this.all_customer.length > 0) {
              var id = this.all_customer[this.all_customer.length-1].id + 1;
          }else{
            id = 1;
          }
          const dataInput = this.formCustomer.value;
          dataInput.id = id;
          this.customer_services.createCustomer(dataInput).subscribe( element => {
            this.toastr.success("Noveau customers");
            this.router.navigate(['customer']);
            this.dialog.close();
          });
        });
    }
  }
}
