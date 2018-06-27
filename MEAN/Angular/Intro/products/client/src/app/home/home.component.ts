import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _httpService: HttpService) { }

  ngOnInit(){

}

// onHomeAuthor(event:any){
//   event.preventDefault();
//   this._route.params.subscribe((params: Params) => {
//
// let observable = this._httpService.homeAuthor(params['id'],{name: this.author.name});
//
// observable.subscribe((data: any) => {
//   //this.getAuthorsFromService();
//    console.log(data);
//     console.log("we just want to home the task");
// this.author= {_id: "", name: ""};
//   this._router.navigate([`/home`]);
//  });
//
// });
//
// }

// getAuthorsFromService(){
//   let observable = this._httpService.getAllAuthors();
//   observable.subscribe((data:any) => {
//       // const tasks = data.json();
//       console.log("Got our tasks!", data)
//       // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
//       // This may be different for you, depending on how you set up your Task API.
//       console.log(data.data);
//        this.authors = data.data;
//
//    });
//
// }

}
