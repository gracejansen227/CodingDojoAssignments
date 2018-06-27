import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: any;
  authors= [];

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit(){
    this.author= {_id: "", name: ""};
    this._route.params.subscribe((params: Params) => {
      //console.log("this isjust params",params);
    //let id = (params['id']);
    //this.author = {_id: params['id']};
    console.log("is this working",params['id']);
    let observable = this._httpService.findOne(params['id']);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got our author!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.author);
        console.log(data.author['name']);
         this.author = data.author;

  });
});
}

onEditAuthor(event:any){
  event.preventDefault();
  this._route.params.subscribe((params: Params) => {

let observable = this._httpService.editAuthor(params['id'],{name: this.author.name});

observable.subscribe((data: any) => {
  //this.getAuthorsFromService();
   console.log(data);
    console.log("we just want to edit the task");
this.author= {_id: "", name: ""};
  this._router.navigate([`/home`]);
 });

});

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

}
