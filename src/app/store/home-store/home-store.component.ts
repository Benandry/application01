import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrls: ['./home-store.component.scss']
})
export class HomeStoreComponent {

  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemShowCount = 12;

  constructor(){

  }

  onSortUpdated( newSort : string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemUpdated( count : number ): void {
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated( colsNum : number ) : void 
  {
    this.columnsCountChange.emit(colsNum);
  }

}
