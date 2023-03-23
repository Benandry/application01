import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { UpdateUpComponent } from '../update-up/update-up.component';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns : string[] = ['username','name',"email",'role',"status", 'action' ];
  user_listes : any;
  dataSource : any;


  constructor(
    private service : AuthService,
    private dialog : MatDialog
  ){
      this.load_user();
  }

  load_user() {
      this.service.getAll().subscribe( res => {
        this.user_listes = res;
        this.dataSource = new MatTableDataSource(this.user_listes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  updateUser(code : any){

      const popup = this.dialog.open(UpdateUpComponent,{
        enterAnimationDuration : "1000ms",
        exitAnimationDuration : "6000ms",
        width : "40%",
        data : {
          user_code : code, 
        }
      })

      popup.afterClosed().subscribe(res => {
        this.load_user(); 
        // alert("alert zalah")
      });
  }

  openDialog() {
  }
}
