import { Component,EventEmitter,Output ,OnInit,OnDestroy} from '@angular/core';
import { StoreService } from '../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit,OnDestroy {

  categoriesSubscription !: Subscription;
  @Output() showCategory = new EventEmitter<string>();

  categories !: Array<string>;

  constructor(
    private storeServices : StoreService
  ){

  }

  ngOnInit(): void {
     this.categoriesSubscription = this.storeServices.getAllCategories().subscribe(_categories => {
        this.categories = _categories;
    });
  }

  onShowCategory( category : string): void
  {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
