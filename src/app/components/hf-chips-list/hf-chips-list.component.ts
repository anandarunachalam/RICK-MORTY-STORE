import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CHIPMODEL } from '../../models/hf-chip.model';

@Component({
  selector: 'app-hf-chips-list',
  templateUrl: './hf-chips-list.component.html',
  styleUrls: ['./hf-chips-list.component.scss']
})
export class HfChipsListComponent implements OnInit {

  
@Input()chipsInput:CHIPMODEL;

@Output()removeFilter:EventEmitter<CHIPMODEL> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeChip(){
      this.removeFilter.emit(this.chipsInput)
  }

}
