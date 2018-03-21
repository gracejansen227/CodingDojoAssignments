//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(arr, callback) {
     let new_list = [];
     for (var i=0; i<arr.length; i++){
       callback(new_list.push(i));
     }
   },
   reduce: function(arr, callback) {
     let new_sum = 0;
     for(var i=0; i<arr.length; i++){
       callback(new_sum += i);
     }
   },
   find: function(arr, val, callback) {
     for(var i=0; i < arr.length; i++){
       if ( arr[i] == val){
         return true;
       }
     }
   },
   filter: function(arr, val, callback) {
     let new_arr = [];
     for(var i=0; i < arr.length; i++){
       if ( arr[i] == val){
         return new_arr.push(arr[i]);
       }
     }
   },
   reject: function() {
     let new_arr = [];
     for(var i=0; i < arr.length; i++){
       if ( arr[i] == val){
         return false;
       }
       else {
         new_arr.push(arr[i]);
       }
     }
   }
 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
