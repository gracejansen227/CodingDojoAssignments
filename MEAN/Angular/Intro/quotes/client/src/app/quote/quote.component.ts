import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: any;
  author: any;
  error: any;
  quotes: [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit() {
    this.quote = {_author: "", content: ""};
    // this.author = {name: ""};
    this._route.params.subscribe((params: Params) => {
      //console.log("this isjust params",params);
    //let id = (params['id']);
    //this.author = {_id: params['id']};
    console.log("is this working",params['id']);
    let observable = this._httpService.findOne(params['id']);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got this one author!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.author);
        console.log("this is the name", data.author['name']);
         this.author = data.author['name'];
         this.author_id = data.author['_id'];

  });
});
  }



onSubmitNewQuote(event:any){
  event.preventDefault();
  this._route.params.subscribe((params: Params) => {

  console.log("is this working",params['id']);
  let observable = this._httpService.addQuote(params['id'], this.quote);
  observable.subscribe((data:any) => {

    // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
    // This may be different for you, depending on how you set up your Task API.
    console.log("what data does this shit do",data);
    this.quote = {content: data.content, _author: params['id']};
    console.log(this.quote);
    // this.quotes += this.quote;
},
(err: any) => {
  console.log(err);
  this.error = err.error.errors.content.message;
  //content.message;
}
});
 });


}
