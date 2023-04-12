import { Component,OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cart : Cart = { item : [] };

  dataSource : Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(
    private cartService : CartService,
    private httClient : HttpClient
  ){

  }
  ngOnInit(): void {
    this.cartService.cart.subscribe( _cart => {
      this.cart = _cart;
      this.dataSource = this.cart.item;
    })

  }

  onModifyCart(){
    this.cartService.clearCart();
  }

  getTotal(item : Array<CartItem>): number 
  {
    return this.cartService.getTotal(item);
  }

  onRemoveFromCart(item : CartItem){
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item : CartItem){
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item : CartItem){
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void
  {
     this.httClient.post('http://localhost:4242/checkout',{
        items : this.cart.item
     }).subscribe(async( res : any ) => {
        // let stiped = await 
     });
  }
}
