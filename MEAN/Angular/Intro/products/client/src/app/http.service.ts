import { Injectable, Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  product: any;
  products=[];

  constructor(private _http: HttpClient) {

 }


getAllProducts(){
  console.log("so i am getting here");
  return this._http.get('/products');
}


deleteProduct(event){
  let id = event;
  console.log("this should get to delete author in the server", event);
  console.log("this should be just the id", id);
  return this._http.get(`/remove/${id}`);
}

addProduct(product){
  console.log("how come this does work?");
  return this._http.post('/new',product);
}


editProduct(id, data){
  // let id = event._id;
console.log("this should get to edit but what is this data is it only title", data);
  console.log("this should be just the id", id);
  return this._http.put(`/update/${id}`, data);
}


findOne(id){
  console.log("this is findOne", id);
  // let id = author._id;
   return this._http.get(`/show/${id}`);
}

}
