import { Component, OnInit } from '@angular/core';
import { HttpService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  currentVal: number;
  totalCoins: number;
  ledgers=[];
  constructor(private _httpService: HttpService){}

ngOnInit(){
  // this.getTasksFromService();
  // this.getOneTask();
}

//
 }
