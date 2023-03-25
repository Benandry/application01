import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { CustomerService } from '../service/customer.service';
import { RolesAccessService } from '../service/roles-access.service';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  constructor ( 
    private service : CustomerService,
    private authService : AuthService,
    private dialog : MatDialog,
    private accessService : RolesAccessService,
    private toastr : ToastrService,
    private route :Router
    )
  {
    this.setAccessPermission();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns : string[] = ["id","name","creditLimit","action"];
  dataSource : any;
  customer_liste : any;

  haveEdit = false;
  haveAdd = false;
  haveDelete = false;
  accesData : any;


  setAccessPermission(){
    this.accessService.getRoleAccess(this.authService.getUserRole(),"customer").subscribe( res => {
      this.accesData = res;

      if (this.accesData.length > 0) {
        this.haveAdd = this.accesData[0].haveadd;
        this.haveDelete = this.accesData[0].havedelete;
        this.haveEdit = this.accesData[0].haveedit;
        this.load_customers();
      }
      else{
        this.toastr.warning("Vous aucun avez pas ");
       this.route.navigate([""]);
      }
      
    });
  }
  load_customers(){
    this.service.getAllCustomer().subscribe( res => {
      this.customer_liste = res;
      this.dataSource = new MatTableDataSource(this.customer_liste);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

  updateCustomer(id :any ) {
    if (this.haveEdit) {
      const dialogUpdate = this.dialog.open(CustomerUpdateComponent,{
        width: "30%",
        enterAnimationDuration: "500ms",
        exitAnimationDuration : "500ms"
      })
  
      dialogUpdate.afterClosed().subscribe( res => {
        this.load_customers();
      })
    }else{
        this.toastr.warning("Access refus","Vous n'avez pas le droit de modifier");
    }
  }
  removeCustomer(id : any){
    if (this.haveDelete) {
      const dialogUpdate = this.dialog.open(CustomerDeleteComponent,{
        width: "30%",
        enterAnimationDuration: "500ms",
        exitAnimationDuration : "500ms"
      })
  
      dialogUpdate.afterClosed().subscribe( res => {
        this.load_customers();
      })
    }else{
      this.toastr.warning("Access refus","Vous n'avez pas le droit de supprimer");
    }
  }  

  addCustomer(){
    if (this.haveAdd) {
      const dialogUpdate = this.dialog.open(CustomerAddComponent,{
        width: "30%",
        enterAnimationDuration: "500ms",
        exitAnimationDuration : "500ms"
      })
  
      dialogUpdate.afterClosed().subscribe( res => {
        this.load_customers();
      })
    }else{
      this.toastr.error("Access refus");
    }
  }  

  openDialog() {
  }

}
