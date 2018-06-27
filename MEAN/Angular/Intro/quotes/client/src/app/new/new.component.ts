import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author: any;
  authors = [];
  error: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.author = { name: ""};
  }

onSubmitNew(event){
  event.preventDefault();
  let observable = this._httpService.addAuthor(this.author);
  observable.subscribe((data:any) => {
    // const tasks = data.json();
    console.log("This should be adding our new stuff!", data)
    // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
    // This may be different for you, depending on how you set up your Task API.

    this.author = {name: data.data.name}
    console.log( "this is the info this.author", this.author);

 },
(err: any) => {
  console.log(err);
  this.error = err.error.errors.name.message;
});

}
}
