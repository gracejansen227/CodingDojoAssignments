import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';

import {HttpService} from './app.service';
import { BrowseService} from './browse/browse.service';
import { HomeService} from './home/home.service';
import { MineService} from './mine/mine.service';
import { BuyService} from './buy/buy.service';
import { SellService} from './sell/sell.service';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './browse/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    BrowseComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService, BrowseService, HomeService, MineService, BuyService, SellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
