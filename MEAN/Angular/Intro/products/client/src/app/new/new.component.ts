import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: any;
  products = [];
  title_error: any;
  price_error: any;

  constructor(private _httpService: HttpService,   private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit() {
    this.product = {title: "", price: 0, url: ""};
  }

onSubmitNew(event){
  event.preventDefault();
  this.title_error= null;
  this.price_error= null;
  let observable = this._httpService.addProduct(this.product);
  observable.subscribe((data:any) => {
    // const tasks = data.json();
    console.log("This should be adding our new stuff!", data)
    // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
    // This may be different for you, depending on how you set up your Task API.

    this.product = {title: data.data.title, price: data.data.price, url: data.data.url}
    console.log( "this is the info this.newTask", this.product);
      this._router.navigate([`/table`]);

 },
(err: any) => {
  console.log(err);
if (err.error.errors.title){
  this.title_error = err.error.errors.title.message;
}

if (err.error.errors.price){
  this.price_error = err.error.errors.price.message;
}
});

}

}
