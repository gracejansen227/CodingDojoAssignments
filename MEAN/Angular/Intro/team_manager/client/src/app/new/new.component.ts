import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: any;
  products = [];
  error: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.product = { title: "", price: 0, url: ""};
  }

onSubmitNew(event){
  event.preventDefault();
  let observable = this._httpService.addProduct(this.product);
  observable.subscribe((data:any) => {
    // const tasks = data.json();
    console.log("This should be adding our new stuff!", data)
    // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
    // This may be different for you, depending on how you set up your Task API.

    this.product = {title: data.data.title, price: data.data.price, url: data.data.url}
    console.log( "this is the info this.product", this.product);

 },
(err: any) => {
  console.log(err);
  this.error = err.error.errors.name.message;
});

}
}
