import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';
import { StoreService } from './services/store.service';

const ROW_HEIGHT : { [id : number ]: number } = { 1 : 400, 2 : 356, 3: 350}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit,OnDestroy  {

  cols = 3;
  category !: string ;
  rowHeight = ROW_HEIGHT[this.cols];

  products !: Array<Product>;
  sort = "desc";
  count = '12';
  productSubscription !: Subscription;

  constructor(
    private cartService : CartService,
    private storeService : StoreService
  ) {

  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.productSubscription = this.storeService.getAllProduct(this.count,this.sort,this.category).subscribe( _products =>{
        this.products = _products;
        console.log(this.products);
    });
  }

  onColumnsUpdated(colsNumber : number):void {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols]
  }

  onShowCategory(newCategory : string) : void 
  {
    this.category = newCategory;
    this.getProduct();
  }

  onItemsCountChange(newCount : number) : void
  {
    this.count = newCount.toString();
    this.getProduct();
  }

  onSortChange(newSort : string) : void
  {
    this.sort = newSort;

    this.getProduct();
  }

  onAddTocart( product : Product ) : void {
    this.cartService.addToCart({
      product : product.image,
      name : product.title,
      price : product.price,
      quantity : 1,
      id : product.id
    })
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

}
