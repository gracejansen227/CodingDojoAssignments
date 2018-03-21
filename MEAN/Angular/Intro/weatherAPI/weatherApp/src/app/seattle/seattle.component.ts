import { Component, OnInit } from '@angular/core';
import { SeattleService} from './seattle.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather = [];
  constructor(private _httpService: SeattleService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    let observable = this._httpService.getSeattleWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for seattle", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });

  }


}
