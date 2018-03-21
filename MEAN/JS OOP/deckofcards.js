class Deck {
  constructor(){
    let deck = [];
    this.deck = deck;
    this.deck = this.reset();
  }
  reset() {
    let cards = [];
    let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    let values = ['A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K'];
      for(var j=0; j <values.length; j++){
        for (var i=0; i<suits.length; i++){
          cards.push([suits[i], values[j]]);
      }
    }
    return cards;
  }

  shuffle(){
  var m = this.deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
  return this.deck;
  }

  randomCard(){
    let i = Math.floor(Math.random()* (51));
    let random_card = this.deck[i];
    console.log(random_card);
    this.deck.splice(i,1);
    return random_card;
  }

  }

class Player {
  constructor(name){
    this.name = name;
    let hand = [];
    this.hand = hand;
  }

  takeCard(deck){
    let new_card = deck.randomCard();
    this.hand.push(new_card);
    return this.hand;
  }

  discard(){
    console.log(this.hand);
    this.hand.pop();
    return this;
  }

}

const deck1 = new Deck();

console.log(deck1);

deck1.shuffle();
console.log(deck1);
deck1.randomCard();
console.log(deck1);

const playa = new Player("h8r");
console.log(playa);
playa.takeCard(deck1);
console.log(playa);

playa.takeCard(deck1);
playa.takeCard(deck1);
playa.takeCard(deck1);
playa.takeCard(deck1);
playa.discard();
console.log(playa);
