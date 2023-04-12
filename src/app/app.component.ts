import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './store/models/cart.model';
import { CartService } from './store/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck ,OnInit {

  store = false;
  current_menu = false;
  cart : Cart = { item : []}

  constructor( 
    private router : Router,
    private cartService : CartService
  ){

  }
  ngOnInit(): void {
    this.cartService.cart.subscribe( _cart  => {
       this.cart = _cart
    });
  }

  ngDoCheck(): void {
    const  url = this.router.url;
    // console.log(url);
    
    if (url == 'store') {
      this.store = true;
      this.current_menu = false;
    }else{
      this.store = false;
      this.current_menu = true;
    }
  }

}
