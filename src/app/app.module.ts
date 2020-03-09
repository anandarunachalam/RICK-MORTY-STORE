import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HumanFinderModule } from '../app/shared/humanfinder.module';
import { RmsShowService } from './services/hf-list.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HumanFinderModule
  ],
  providers: [RmsShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
