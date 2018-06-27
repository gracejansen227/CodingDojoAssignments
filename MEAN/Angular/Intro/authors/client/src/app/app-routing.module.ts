import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent} from './new/new.component';
import { EditComponent} from './edit/edit.component';
import { AppComponent} from './app.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  //{ path: 'home', component: AppComponent},
  { path: 'home', component: TableComponent},
   { path: '', pathMatch: 'full',component: TableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
