import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent} from './browse/details/details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'mine', component: MineComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent},
  { path: 'browse', component: BrowseComponent},
  { path: 'browse/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
