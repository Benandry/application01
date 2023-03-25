import { Component,OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(
    private builder : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private service_customer : CustomerService,
    private toastr : ToastrService,
    private dialog : MatDialogRef<CustomerUpdateComponent>

  ) {}

  
  customerEdit : any;

  ngOnInit(): void {
    
      if (this.data.id_customer) {
        this.service_customer.getCustomerById(this.data.id_customer).subscribe( res => {
          this.customerEdit = res;
          this.formCustomer.setValue({
            id : this.customerEdit[0].id,
            name : this.customerEdit[0].name,
            creditLimit :this.customerEdit[0].creditLimit
          })
          
        })
      } 
  }
  formCustomer  = this.builder.group({
    id : this.builder.control(''),
    name : this.builder.control('',Validators.required),
    creditLimit : this.builder.control('',Validators.required)
  })

  updateCustomer(){
    if (this.formCustomer.valid) {
      this.service_customer.updateCustomer(this.data.id_customer,this.formCustomer.value).subscribe( res => {
        this.toastr.success("Modification de customer reuissite");
        this.dialog.close();
      })
    }
  }

}
