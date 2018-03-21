class Ninja {
  constructor(name){
    this.name = name;
    let health = 100;
    this.health = health;
    let strength = 3;
    this.strength = strength;
  let speed = 3;
    this.speed = speed;

  }

  sayName() {
    console.log(this.name);
  }

  showStats(){
    console.log(this.name + "s stats are: " + this.health + " health, " + this.speed + " speed, and  " + this.strength + " strength");
  }

  drinkSake(){
    this.health += 10;
  }

}


class Sensei extends Ninja{
  constructor(name){
    super(name);
    let health = 200;
    this.health = health;
    let speed = 10;
    this.speed = speed;
    let strength = 10;
    this.strength = strength;
    let wisdom = 10;
    this.wisdom = wisdom;
  }

  speakWisdom() {
    super.drinkSake();
    console.log("It actually takes 2 programmers 1 month what 1 programmer can do in 2!");

  }

}

const ninja1 = new Ninja("LadyBird");

ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
