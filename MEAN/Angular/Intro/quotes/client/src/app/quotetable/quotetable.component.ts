import { Injectable, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotetable',
  templateUrl: './quotetable.component.html',
  styleUrls: ['./quotetable.component.css']
})

export class QuoteTableComponent implements OnInit {
  author: any;
  quote: any;
  quotes = [];
  votes: number;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router){}

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
        console.log("Got this one author!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.author);
        console.log("this is the name", data.author['name']);
         this.author = data.author['name'];
         this.author_id = data.author['_id'];
         this.getQuotesFromService(this.author_id);


  });
});
}


goToAddQuote(this.author){
  console.log("i wanna pass this to the add quote", this.author_id);
  //add navigate part here! plus pass this.author
    this._router.navigate([`/new_quote/${this.author_id}`]);
}

  getQuotesFromService(id){
    console.log("this is id in getQuotesFromService", id);
    let observable = this._httpService.getAllQuotes(id);
    observable.subscribe((data:any) => {

        console.log("this should get me all the data", data)

        console.log(data.quotes);
         this.quotes = data.quotes;

     });

  }

  onButtonClickDelete(id){
    let observable = this._httpService.deleteQuote(id);
    console.log(event);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("what is this data", data)
        // this.deleteTask =
        console.log("we just want to delete the quote homie", event);

     });
     this.getQuotesFromService(this.author_id);

  }

  vote(id, num){
    this.vote = {id: id, vote: num};
    console.log("whats this homei, an event?",this.vote);
    let observable = this._httpService.vote(vote);
    observable.subscribe((data: any) => {
      this.getQuotesFromService(this.author_id);
    });
  }



}
