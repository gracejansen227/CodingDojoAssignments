function Ninja(name) {
  let health = 100;
  //these are private? should they go below and be separate? a setter?
  const speed = 3;
  const strength = 3;
  this.name = name;

function updateHealth(num){
  this.strength += num;
  return this;
};

this.sayName = function(){
  console.log(this.name);
  return this;
}

this.drinkSake = function(){
  this.strength += 10;
  return this;
}

this.showStats = function(){
  console.log("Ninja's health:" +'strength  '+ strength +' health  '+ health +' speed '+ speed );
}

}

const ninja2 = new Ninja("Brad");

ninja2.sayName();

ninja2.showStats();

const ninja2 = new Ninja("Brad");

ninja2.sayName();
