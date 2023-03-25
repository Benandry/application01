import { Component , OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit{

  constructor(
    private service_customer : CustomerService,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialog : MatDialogRef<CustomerDeleteComponent>,
    private toastr : ToastrService,
    private router : Router
  ){
    
  }
  ngOnInit(): void {

  }
    remove(){
      this.service_customer.deleteCustomer(this.data.id_customer).subscribe( res =>{
        this.toastr.success("Suppression de customer");
        this.dialog.close();
        this.router.navigate(['customer']);
      })

    }
}
