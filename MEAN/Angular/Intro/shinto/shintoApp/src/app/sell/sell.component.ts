import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/app.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  currentVal: number;
  amount: number;
  ledgers=[];
  totalCoins: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  this.showInfo();
  // this.amount = 0;
  }

showInfo(){
    this.currentVal = this._httpService.showCurrentVal();
    this.totalCoins = this._httpService.showTotalCoins();

  }

onSell(event){
  event.preventDefault();
  console.log("add this shit later");
  this.amount = Number(this.amount);
  console.log(this.amount);
  if (this.amount <= this.totalCoins){
  this.totalCoins = this.totalCoins - this.amount;
  this._httpService.sell(this.amount);
  this.currentVal = this._httpService.showCurrentVal();
}else {
  console.log("cannot sell something for negative or if you have less money than the price!");
}
}

}
