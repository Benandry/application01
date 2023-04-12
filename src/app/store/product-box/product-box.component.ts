import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  @Input() product !: Product 

  @Output() addToCart = new EventEmitter();

  constructor(){
    
  }

  onAddTocart(){
    this.addToCart.emit(this.product);
  }

}
