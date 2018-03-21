import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/app.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  guess: any;
  title = 'app';

  currentVal: number;
  totalCoins: number;

  ledgers=[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  //this.currentVal = 0;

  }

  onMine(event){
    event.preventDefault();
    //console.log("is this this.newMine",guess);
    console.log("or this is this.guess",this.guess);
    if (this.guess == 8){
      console.log("answer is 8");
    this._httpService.mine();

    } else {
    console.log("guess again!", this.guess);

   };

}
}
