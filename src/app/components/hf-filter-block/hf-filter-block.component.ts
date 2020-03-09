import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hf-filter-block',
  templateUrl: './hf-filter-block.component.html',
  styleUrls: ['./hf-filter-block.component.scss']
})
export class HfFilterBlockComponent implements OnInit {
  @Input()filterList:any[];
  @Output() filterChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
  
    ngOnInit(): void {
    }
  
    toggleFilter(f,item){
      let data = {
        name:f,
        item:item
      }
      this.filterChange.emit(data)
    }

}
