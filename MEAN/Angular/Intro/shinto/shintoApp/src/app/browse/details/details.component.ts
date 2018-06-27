import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentVal: number;
  amount: number;
  ledger: any;
  totalCoins: number;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
    let i = (params['id']);
    console.log("is this working",params['id']);
    this.ledger = this._httpService.findOne(i);
  }
}

}
