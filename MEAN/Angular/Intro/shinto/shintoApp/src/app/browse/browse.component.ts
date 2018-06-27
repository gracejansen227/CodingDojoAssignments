import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  currentVal: number;
  amount: number;
  ledgers=[];
  totalCoins: number;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit() {
  this.showAllLedgers();
  }

  showAllLedgers(){
      this.ledgers = this._httpService.showLedgers();
      console.log(this.ledgers);
    }

  onButtonClickDetails(i){
    console.log(i);
    this._router.navigate([`/browse/${i}`]);

    }
}
