import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({
    item : []

  });

  constructor(private _snackBar : MatSnackBar) { }

  addToCart(item : CartItem): void {
    const items = [...this.cart.value.item];

    const itemInCart = items.find(_item => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1; 
    }else{
      items.push(item);
    }

    this.cart.next({ item : items });

    this._snackBar.open(" 1 item add to Card .","OK",{ duration : 3000 });
    
    console.log(this.cart.value);
    

  }

  removeQuantity(item : CartItem):void 
  {
      let itemForRemoval : CartItem | undefined;

      let filteredItems = this.cart.value.item.map(_item => {
        if (item.id === _item.id){
          _item.quantity--;

          if (_item.quantity === 0) {
            itemForRemoval = item;
          }
        }

        return _item;
      })

      if (itemForRemoval) {
        let filteredItems = this.removeFromCart(itemForRemoval);
      }

      this.cart.next({ item : filteredItems});
      
      this._snackBar.open("1 quantity items is removed from cart ","OK",{ duration : 3000});

  }

  getTotal(item : Array<CartItem>): number 
  {
    return item.map(result => result.quantity * result.price).reduce((prev,current) => prev + current,0);
  }

  clearCart() : void
  {
    this.cart.next({ item : []});
    this._snackBar.open("Cart is cleared","OK",{ duration : 3000 });
  }

  removeFromCart(item : CartItem,update = true): Array<CartItem>
  {
      const filteredItems =  this.cart.value.item.filter(_item => _item.id !== item.id);

      if(update){
          this.cart.next({ item : filteredItems });
          this._snackBar.open("Cleared 1 items in cart ","OK",{ duration : 3000 }) 
      }

      return filteredItems;
  }
  
}
