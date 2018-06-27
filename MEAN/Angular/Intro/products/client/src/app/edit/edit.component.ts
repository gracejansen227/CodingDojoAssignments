import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  products= [];
  title_error: any;
  price_error: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit(){
    this.product= {_id: "", title: "", price: 0, url: ""};
    this._route.params.subscribe((params: Params) => {
      //console.log("this isjust params",params);
    //let id = (params['id']);
    //this.author = {_id: params['id']};
    console.log("is this working",params['id']);
    let observable = this._httpService.findOne(params['id']);
    observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("Got our product!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.
        console.log(data.product);
        console.log(data.product.title);
         this.product = data.product;

  });
});
}

onEditProduct(event:any){
  event.preventDefault();
  this.title_error= null;
  this.price_error= null;
  this._route.params.subscribe((params: Params) => {

let observable = this._httpService.editProduct(params['id'],{title: this.product.title, price: this.product.price, url: this.product.url});

observable.subscribe((data: any) => {
  //this.getAuthorsFromService();
   console.log(data);
    console.log("we just want to edit the task");
this.product= {_id: "", title: "", price: 0, url: ""};
  this._router.navigate([`/table`]);
},
(err: any) => {
  console.log(err);
  if(err.error.errors.title){
  this.title_error = err.error.errors.title.message;
    console.log("error is not in the title!");
  }

if (err.error.errors.price){
  this.price_error = err.error.errors.price.message;
}
});

});

}

getProductsFromService(){
  let observable = this._httpService.getAllProducts();
  observable.subscribe((data:any) => {
      // const tasks = data.json();
      console.log("Got our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
      // This may be different for you, depending on how you set up your Task API.
      console.log(data.data);
       this.products = data.data;

   });

}

}
