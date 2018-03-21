import { Component, OnInit } from '@angular/core';
import { DallasService} from './dallas.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: DallasService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.getDallasWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for dallas", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });

  }

}
