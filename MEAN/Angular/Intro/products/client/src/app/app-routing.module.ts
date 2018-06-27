import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent} from './new/new.component';
import { EditComponent} from './edit/edit.component';
import { AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'table', component: TableComponent},
  //{ path: '', component: AppComponent},
  { path: 'home', component: HomeComponent},
   { path: '', pathMatch: 'full',component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
