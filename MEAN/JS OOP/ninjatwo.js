function Ninja(name) {
  let health = 100;
  this.health = health;
  //these are private? should they go below and be separate? a setter?
  const speed = 3;
  let strength = 3;
  this.strength = strength;
  this.name = name;

function updateHealth(){
  return this.health;
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
  console.log("Ninja's health:" +'strength  '+ strength +' health  '+ this.health +' speed '+ speed );
}

this.punch = function(ninja){
  if(ninja instanceof Object){
  console.log(ninja);
  ninja.health -= 5;
 //ninja.updateHealth(); why does this work? scope issues?
  console.log(name + " just punched " + ninja.name + "who lost 5 health points!");
}
else {
  console.log("wtf mate nah");
}
}

this.kick = function(ninja){
  if(ninja instanceof Object){
  ninja.health = ninja.health - 15*(this.strength);
  console.log(this.name + " just kicked " + ninja.name);
}
 else {
  console.log("fuck nah");
}
}

const ninja2 = new Ninja("Brad");

const blueninja = new Ninja("Eamon");

blueninja.sayName;

blueninja.punch(ninja2);

ninja2.showStats();

blueninja.kick(ninja2);
