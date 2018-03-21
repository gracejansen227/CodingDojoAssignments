import { Component, OnInit } from '@angular/core';
import { BurbankService } from './burbank.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = [];

  constructor(private _httpService: BurbankService) { }

  ngOnInit() {
    this.getWeather();

  }

  getWeather(){
    let observable = this._httpService.getBurbankWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for burbank", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });

  }


}
