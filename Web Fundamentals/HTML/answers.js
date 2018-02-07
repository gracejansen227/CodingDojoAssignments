//Chapter 1 Fundamentals
// Grace Jansen

//page 16

//Setting and Swapping:

var myNumber = 42;
var myName =' Grace';

temp = myNumber;
myNumber = myName;
myName = temp;

//Print 52 to 1066:

for (var i = -52; i <=1066; i++){
  print(i);
}

//Don't Worry, Be Happy

function beCheerful(){

for (i=1; 1<=98; i++){
  console.log('good morning!');
}
}

//Multiples of Three - But Not all

for ( i=-300; i<=0; i++){
  if ( i == -3){
    continue;
  }
  if ( i === -6){
    continue;
  }
 else if( i%3==0){
    console.log(i);
  }
}

//Printing INtegers with While
var i = 200;
while( i<=5280 ){
  console.log(i);
  i++;
}


//You Say It's Your Birthday

var month = '';
var day = '';

if( month === 3 && day === 16){
  console.log('How did you know?')
}
else {
  console.log('Just another Day');
}


//Leap Year

var year = 1993;

function leapYear(year){
  if( year%4 == 0 && year%100 !==0){
    console.log(year + 'is a leap year');
  } else if( year%400 ==0){
    console.log( year + 'is a leap year');
  }
}
 var year = 1993;
function leapYear(year){
  if(( year%4 == 0) &&  (year%100 !== 0) || ( year%400 ==0)){
      console.log( 'its a leap year');
}
}

// The Final Countdown






//Print and Count
var count= 0;
for( var i =512; i <=4096; i++){
  if (i%5 ==0){
    console.log(i);
  }
  count++;
}

//Multiples of Six
var i =0;
while(i<=60000){
  console.log(i);
  i = i+6;
}

// Counting, the Dojo way

for(i = 1; i<=100; i++){
  if( i % 5 ==0 && i%10 !==0){
    print('Coding');
  }
  if( i %10 ==0){
    print('Dojo');
  }
}

//What do You know?
var incoming = '';
function go( incoming){
  print(incoming);
}

// Whoa, That Sucker's Huge...
var sum = 0;
for( var i= -300000; i <300000; i++){
  if (i %2 !== 0){
    sum = sum + i;
    console.log(sum);
  }
}


/// COuntdown by Fours
var i = 2016;
while ( i>0 ){
  console.log(i);
  i = i-2;
}


// Flexible COuntdown
var multiples = 0;
var lowNum = 2;
var highNum = 9;
var mult = 3;

for ( var i = highNum; i > lowNum; i--){
  multiples = mult * i;
  console.log(multiples);
  console.log( lowNum, highNum, mult);
}


// Page 20:

DO THESE MONDAY NIGHT!!

// Countdown
var arr = [];
var number = '';
function countdown ( number) {
  for ( var i = number; i >=0; i--){
  push.arr[i];
}
}

It will be number + 1 length !

//Print and REturn

var arr= [];
function printReturn(arr){
  print(arr[0]);
  return arr[1];
}


//First Plus length

var arr = [];
var sum = 0;
function firstPlusLength(){
  sum = arr[0] + arr.length();
  return sum;
}

It would cocatenate the values, not sum them.

//Values Greater than Second

var arr = [1,3,5,7,9,13];
for ( i=0; i<= arr.length; i++){
  if ( arr[i] > arr[2]){
    print arr[i];
  }
}


//Values Greater than Second, Generalized
var arr = [];
function acceptArray(arr){
  for( var i = 0; i<= arr.length; i++){
    if ( arr[i] > arr[2]){
      print arr[i];
    }
  }
}

If the array is only one element long it would not return anything!


//This LEngth, That Values

var num1 = '';
var num2 = '';

function thisLength(num1, num2){
  for (i=0; i <= num1.length; i++){
    arr[i] = num2;
  }
  return arr;
  if (num1 = num2){
    print ("Jinx!");
  }
}

//Fit the First Values

function fitFirst(arr){
  if( arr[0] < arr.length){
    print( "Too big!");
  }
  if( arr[0] < arr.length){
    print("Too small!");
  }
  else {
    print( "Just right!");
  }
}

//Fahrenheit to Celsius
var fDegrees = '';
var cel = '';
function fahrenheittoCelsius (fDegrees){
  cel = (fDegrees - 32)*(5/9);
  return cel;

}

//Celsius to fahrenheittoCelsius
var far = '';
var cDegrees = '';
function celsiusToFahrenheit(cDegrees){
  far = ((9/5)*cDegrees) + 32;
  return far;
}


//Page 22

//Biggie size





// Print Low, Return highNum

// Print One, Return another



// Double Vision


// Count Positives

//Even Odds


//Increment the Seconds











// Celsuis to Fahrenheit'
