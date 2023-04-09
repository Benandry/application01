import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  store = false;
  current_menu = false;

  constructor( 
    private router : Router
  ){

  }
  ngDoCheck(): void {
    const  url = this.router.url;
    console.log(url);
    
    if (url == 'store') {
      this.store = true;
      this.current_menu = false;
    }else{
      this.store = false;
      this.current_menu = true;
    }
  }

}
