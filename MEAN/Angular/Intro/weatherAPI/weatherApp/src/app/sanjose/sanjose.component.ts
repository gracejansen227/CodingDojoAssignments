import { Component, OnInit } from '@angular/core';
import { SanjoseService} from './sanjose.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: SanjoseService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    let observable = this._httpService.getSanjoseWeather();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("get out all weather data for san jose", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        console.log("does this work", data.weather[0].description)
         this.weather = data;
     });

}
