import { Injectable, Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  author: any;
  authors=[];

  constructor(private _http: HttpClient) {

 }


getAllAuthors(){
  console.log("so i am getting here");
  return this._http.get('/authors');
}


deleteAuthor(event){
  let id = event;
  console.log("this should get to delete author in the server", event);
  console.log("this should be just the id", id);
  return this._http.get(`/remove/${id}`);
}

addAuthor(author){
  console.log("how come this does work?");
  return this._http.post('/new', author);
}


editAuthor(id, name){
  // let id = event._id;
console.log("this should get to edit", name);
  console.log("this should be just the id", id);
  return this._http.put(`/update/${id}`, name);
}


findOne(id){
  console.log("this is findOne", id);
  // let id = author._id;
   return this._http.get(`/show/${id}`);
}

}
