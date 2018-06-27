import { Injectable, Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  author: any;
  authors = [];

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router){}

  ngOnInit(){
    this.getAuthorsFromService();
    // this.getOneTask();
    // this.newAuthor = {name: ''};
    // this.editAuthor = {name: ''}

  }

  getAuthorsFromService(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.data);
         this.authors = data.data;

     });

  }

  onButtonClickDelete(event:any){
    let observable = this._httpService.deleteAuthor(event);
    console.log(event);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("what is this data", data)
        // this.deleteTask =
        console.log("we just want to delete the author", event);
        this.getAuthorsFromService();

     });

  }

  onEdit(event: any){
    console.log(event._id);
    let id = event._id;
    this._router.navigate([`/edit/${id}`]);
  }


}
