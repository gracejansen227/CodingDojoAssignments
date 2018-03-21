import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/app.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  currentVal: number;
  amount: number;
  ledgers=[];
  totalCoins: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  this.showInfo();
  this.amount = 0;
  }

showInfo(){
    this.currentVal = this._httpService.showCurrentVal();
    this.totalCoins = this._httpService.showTotalCoins();

  }

onBuy(){
  event.preventDefault();
  console.log("add this shit later");
  if (this.amount > 0){
  this.totalCoins = this.totalCoins + this.amount;
  this._httpService.buy();
}else {
  console.log("cannot buy something for negative or no money!");
}
}

}
