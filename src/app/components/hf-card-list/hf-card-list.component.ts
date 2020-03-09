import { Component, OnInit } from '@angular/core';
import { RmsShowService } from '../../services/hf-list.service';
import {Page, Character, FILTER} from '../../models/hf-components.model';
import { CHIPMODEL } from '../../models/hf-chip.model';

@Component({
  selector: 'app-hf-card-list',
  templateUrl: './hf-card-list.component.html',
  styleUrls: ['./hf-card-list.component.scss']
})
export class HfCardListComponent implements OnInit {


  searchName: string;
  sortOrder: string;
  page:Page = {
    count:0,
    currentpage:1,
    pages:0,
    perPage:20
  };
  allCharacters: any[];
  filterList:FILTER[];
  selectedFilter: CHIPMODEL[]=[];
  constructor(private _rmsService: RmsShowService) { }

  ngOnInit(): void {
    this.filterList = this._rmsService.getAllFilterList();
    this.getAllCharacters(1)
  }

  getAllCharacters(page:number){
    let query = '';
    if(this.selectedFilter.length > 0){
      this.selectedFilter.forEach(item=>{
        query +='&' +item.name.name.toLowerCase() +'='+item.item.name 
      })
    }
    if(this.searchName){
      query += '&name='+this.searchName
    }
    this._rmsService.getAllCharacters(page,query).subscribe(
      (res:{info:any,results:Character[]})=>{
        this.page.count = res.info.count;
        this.page.pages = res.info.pages;
        this.allCharacters = res.results;
      },
      err=>{
      }
    )
  }
  filterChange(evt){
    let index = this.selectedFilter.findIndex(sFilter=> sFilter.item === evt.item);
    if(index === -1){
      this.selectedFilter.push(evt);
    }else{
     let mainCat =  this.filterList.find(item=> item.name === this.selectedFilter[index].name.name);
     let subItem = mainCat.items.find(sItem=> sItem.name === this.selectedFilter[index].item.name);
     subItem.selected = false;
      this.selectedFilter.splice(index,1);
    }
    this.getAllCharacters(this.page.currentpage);
  }

  goToPage(evt){
    this.page.currentpage = evt;
    this.getAllCharacters(this.page.currentpage);
  }

  sortingOnChange(val){
    this.sortOrder = val;
    this.allCharacters = [...this.allCharacters]
  }

}
