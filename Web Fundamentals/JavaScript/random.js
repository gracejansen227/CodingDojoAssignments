//random

//1 quarter equals 1 game

// do sunday morning

function slotGame(coins){
  for(var i=coins; i >= 0; i--){
    var guess =  Math.floor(Math.random()*100);
    var win = Math.floor(Math.random()*100);
    if( win == guess){
    var wonCoins = (Math.floor(Math.random()*51))+50;
      var totalCoins = wonCoins +i;
    }
    if (i==0){
      return i;
    }
}
}

slotGame(100);
