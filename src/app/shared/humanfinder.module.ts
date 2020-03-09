import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { SortPipe } from '../pipes/hf-sort.pipe';
import { ElaspedTimePipe } from '../pipes/hf-time.pipe';

import { HighLightDirective } from '../directives/human-finder.directive';

import { HfCardListComponent } from '../components/hf-card-list/hf-card-list.component';
import { HfChipsListComponent } from '../components/hf-chips-list/hf-chips-list.component';
import { HfFilterBlockComponent } from '../components/hf-filter-block/hf-filter-block.component';
import { HfPaginationBlockComponent } from '../components/hf-pagination-block/hf-pagination-block.component';



@NgModule({
  declarations: [
    HfCardListComponent,
    HfChipsListComponent,
    HfFilterBlockComponent,
    HfPaginationBlockComponent,
    ElaspedTimePipe, 
    SortPipe, 
    HighLightDirective
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    FormsModule
  ],
  exports:[
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ElaspedTimePipe,
    SortPipe,
    HighLightDirective,
    HfCardListComponent,
    HfChipsListComponent,
    HfFilterBlockComponent
  ]
})
export class HumanFinderModule { }
