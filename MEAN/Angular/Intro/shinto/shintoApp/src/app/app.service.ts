import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService implements OnInit {

  currentVal: number;
  totalCoins: number;
  ledgers = [];
  random_id : number;


  constructor(private _http: HttpClient) {
     this.currentVal = 0;
     this.totalCoins = 0;

 }

 makeID() {
   return Math.floor(Math.random()*(9998) + 1);
 }

 ngOnInit() {

 }

mine(){
  if (this.currentVal == null){
    this.currentVal = 0;
  }
  this.currentVal++;
  this.totalCoins++;
  console.log("do we get here?");
  console.log(this.currentVal);
  this.random_id = this.makeID();
  this.ledgers.push({id: this.random_id, action: 'Mined', amount: '1', value: this.currentVal});
  console.log("are the ledgers even working",this.ledgers)
}

buy(amount){
  this.currentVal++;
  console.log("does this get out the currentVal", this.currentVal);
  this.random_id = this.makeID();
  this.ledgers.push({id: this.random_id, action: 'Bought', amount: amount, value: this.currentVal});
  this.totalCoins += amount;
}

sell(amount){
  this.currentVal--;
  console.log("does this work", this.currentVal);
  this.random_id = this.makeID();
  this.totalCoins -= amount;
  this.ledgers.push({id: this.random_id, action: 'Sold', amount: amount, value: this.currentVal});
}

showCurrentVal(){
  console.log("will we get here",this.currentVal);
  return this.currentVal;

}

showTotalCoins(){
  if (this.totalCoins == null){
    this.totalCoins = 0;
  }
  console.log(this.totalCoins);
  return this.totalCoins;
}

showLedgers(){
  console.log(this.ledgers);
  return this.ledgers;
}

findOne(i){
  return this.ledgers[i];
}

}
