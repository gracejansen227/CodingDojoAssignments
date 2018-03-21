import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MEAN';
  newTask: any;
  tasks = [];
  oneTask = [];
  editTask: any;
  editThis : boolean;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    // this.getOneTask();
    this.newTask = { title: "", description: ""}
    this.editTask = {title: "", description: ""}
    this.editThis = false;
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
  // onButtonClickOne(){
  //   let observable = this._httpService.getTask();
  //   observable.subscribe((data:any) => {
  //       // const tasks = data.json();
  //       console.log("Got just one task !", data)
  //       // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
  //       // This may be different for you, depending on how you set up your Task API.
  //       console.log(data.data);
  //       this.oneTask = data.data;
  //    });
  //
  // }
  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
        observable.subscribe((data:any) => {
            // const tasks = data.json();
            console.log("what is this data", data)
            // this.deleteTask =
            console.log("this is iin editing shizz ya", event);

             this.editTask = {title: "", description: ""}

             this.getTasksFromService();
     });

  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("This should be adding our new stuff!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        this.newTask = {title: data.data.title, description: data.data.description}
        console.log( "this is the info this.newTask", this.newTask);
        console.log("did this work here?");
        this.getTasksFromService();

     });

  }

  onButtonClickDelete(event:any){
    let observable = this._httpService.deleteTask(event);
    console.log(event);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("what is this data", data)
        // this.deleteTask =
        console.log("we just want to delete the task", event);
        this.getTasksFromService();

     });
     //this will refresh the tasks list
     // this.getTasksFromService();
  }

  onButtonClickEdit(event:any){
    this.editThis = true;
    let observable = this._httpService.getEditTask(event);
    console.log("is this the full task?", event);
    //making an edit form here
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log(data.data);
        console.log("we just want to edit the task", data.data[0]);

        // console.log("is this the old infor", event.title);
       this.editTask = {title: data.data[0].title, description: data.data[0].description, _id: data.data[0]._id}
        // console.log( "this is the info this.newTask", this.editTask);
        // console.log("did this work here?");

     });
     //this will refresh the tasks list
     // this.getTasksFromService();
  }



}
