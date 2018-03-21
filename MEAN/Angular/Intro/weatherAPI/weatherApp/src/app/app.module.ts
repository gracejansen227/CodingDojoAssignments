import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { HttpService } from './app.service';
import { ChicagoService} from './chicago/chicago.service';
import { DallasService} from './dallas/dallas.service';
import { DcService} from './dc/dc.service';
import { SanjoseService} from './sanjose/sanjose.service';
import { SeattleService} from './seattle/seattle.service';
import {BurbankService} from './burbank/burbank.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService, BurbankService, SeattleService, ChicagoService, SanjoseService, DcService, DallasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
