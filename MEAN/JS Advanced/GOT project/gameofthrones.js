// $(document).ready(function(){
//
// for( var i=1; i <= 384; i++){
//     $.get("https://www.anapioficeandfire.com/api/houses/" + i + "/")
//     , function(res){
//       if( res.name == "House Stark of Winterfell" ){
//         var button = document.getElementById("tar");
//         var houseID = res.id;
//         console.log(res.id);

var button = document.getElementById("tar");
var house = button.addEventListener("click", function(){ $.get("https://www.anapioficeandfire.com/api/houses/378/", displayInfo)})

function displayInfo(data){
  console.log(data);
  var name = data.name;
console.log(data.name);
var words = data.words;
console.log(data.words);
$("#details").append("<h1>" + data.name + "</h1>" + "<h2>" + data.words + "</h2>");

}

var button = document.getElementById("stark");
for( var i=1; i <= 384; i++){
var house = button.addEventListener("click", function(){ $.get("https://www.anapioficeandfire.com/api/houses/10/", displayInfo)})

function displayInfo(data){
  console.log(data);
  var name = data.name;
console.log(data.name);
var words = data.words;
console.log(data.words);
$("#details").append("<h1>" + data.name + "</h1>" + "<h2>" + data.words + "</h2>");

}
}

var button = document.getElementById("lan");
var house = button.addEventListener("click", function(){ $.get("https://www.anapioficeandfire.com/api/houses/340/", displayInfo)})

function displayInfo(data){
  console.log(data);
  var name = data.name;
console.log(data.name);
var words = data.words;
console.log(data.words);
$("#details").append("<h1>" + data.name + "</h1>" + "<h2>" + data.words + "</h2>");

}

var button = document.getElementById("bar");
var house = button.addEventListener("click", function(){ $.get("https://www.anapioficeandfire.com/api/houses/379/", displayInfo)})

function displayInfo(data){
  console.log(data);
  var name = data.name;
console.log(data.name);
var words = data.words;
console.log(data.words);
$("#details").append("<h1>" + data.name + "</h1>" + "<h2>" + data.words + "</h2>");

}
