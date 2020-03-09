import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hf-pagination-block',
  templateUrl: './hf-pagination-block.component.html',
  styleUrls: ['./hf-pagination-block.component.scss']
})
export class HfPaginationBlockComponent implements OnInit {

  @Input('currentPage') currentPage: number = 1;
  @Input('totalItemsCount') totalItemsCount: number;
  @Input('perPage') perPage: number=20;
  @Input('pagesToShow') pagesToShow: number;

  @Output() prev = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {
  }

  
  ngOnInit() {
  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.goPage.emit(n);
  }

  ifLastPage(): boolean {
    return this.perPage * this.currentPage >= this.totalItemsCount;
  }


  goToPrevPage(): void {
    this.goToPage(this.currentPage-1);    
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage+1);
    
  }



}
