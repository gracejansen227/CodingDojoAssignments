import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

 }
 getTasks(){
     return this._http.get('/tasks');
  }

// getTask(){
//   return this._http.get('/tasks/5aa7fe7b96fb931eb56c9cd8');
// }

addTask(newtask){
  return this._http.post('/new', newtask);
}

getEditTask(editTask){
  let id = editTask;
  console.log("is this even going through? haha LOL");
  return this._http.get(`/tasks/${id}`);
}

deleteTask(event){
  let id = event;
  console.log("this should get to delete Task in the server", event);
  console.log("this should be just the id", id);
  return this._http.get(`/remove/${id}`);
}

editTask(event){
  let id = event._id;
  console.log("this should get to edit", event);
  console.log("this should be just the id", id);
  return this._http.put(`/edit/${id}`, event);
}


};
