import { Injectable, Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  author: any;
  authors=[];
  quote: any;
  quotes: [];

  constructor(private _http: HttpClient) {

 }


getAllAuthors(){
  console.log("so i am getting here");
  return this._http.get('/authors');
}

getAllQuotes(id){
  console.log("is this the id", id);
  console.log("so i am getting to get all quotes");
   return this._http.get(`/quotes/${id}`);
}

deleteAuthor(event){
  let id = event;
  console.log("this should get to delete author in the server", event);
  console.log("this should be just the id", id);
  return this._http.get(`/remove/${id}`);
}

deleteQuote(id){
  // let id = event;
  console.log("this should get to delete quote in the server", id);
  // console.log("this should be just the id", id);
  return this._http.get(`/delete_quote/${id}`);
}

addAuthor(author){
  console.log("how come this does work?");
  return this._http.post('/new', author);
}


addQuote(id, quote){
  console.log(id);
  console.log(quote);
  console.log("so we get here on the add quote !");
 return this._http.post(`/new_quote/${id}`, quote);
}


editAuthor(id, name){
  // let id = event._id;
console.log("this should get to edit", name);
  console.log("this should be just the id", id);
  return this._http.put(`/update/${id}`, name);
}

vote(vote){
  console.log(vote.id);
  return this._http.patch(/vote/${vote.id}, vote.vote);
}

findOne(id){
  console.log("this is findOne", id);

   return this._http.get(`/show/${id}`);
}

}
