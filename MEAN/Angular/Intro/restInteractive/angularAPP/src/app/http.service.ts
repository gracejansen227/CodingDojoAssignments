import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

 }
 getTasks(){
     return this._http.get('/tasks');
  }

getTask(){
  return this._http.get('/tasks/5aa7fe7b96fb931eb56c9cd8');
}

};
