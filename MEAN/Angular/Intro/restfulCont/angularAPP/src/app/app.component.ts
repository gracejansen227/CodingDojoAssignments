import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  oneTask = [];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.getOneTask();
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.data);
         this.tasks = data.data;
     });

  }
  getOneTask(){
    let observable = this._httpService.getTask();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got just one task !", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.data);
        this.oneTask = data.data;
     });

  }

}
