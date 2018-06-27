import { Component, OnInit } from '@angular/core';
import { ChicagoService} from './chicago.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather = [];
  constructor(private _httpService: ChicagoService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    let observable = this._httpService.getChicagoWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for chi", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });
     

  }


}
