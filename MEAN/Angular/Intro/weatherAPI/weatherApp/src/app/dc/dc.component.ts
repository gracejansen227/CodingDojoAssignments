import { Component, OnInit } from '@angular/core';
import { DcService} from './dc.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather = [];
  constructor(private _httpService: DcService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    let observable = this._httpService.getDcWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for dc", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });

}
