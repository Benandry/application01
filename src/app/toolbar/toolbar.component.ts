import { Component , DoCheck} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements DoCheck{

  title = 'application';
  is_menu_required = false;
  is_admin_user = false;
  length_person = 5;

  constructor( private router : Router, private service : AuthService) {

  }

  ngDoCheck(): void {

    let current_url = this.router.url;

    if (current_url == "/login" || current_url == "/register") {
        this.is_menu_required = false;
    }else{
        this.is_menu_required = true;
    }

    if (this.service.getUserRole() ==="admin") {
      this.is_admin_user = true;
    }else{
      this.is_admin_user = false;
    }
  }
}
