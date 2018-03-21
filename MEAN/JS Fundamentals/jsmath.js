//Math 1

function zero_negativity(array){
  for(var i =0; i <= array.length; i++){
    if (array[i] < 0){
      return false;
    }
    else {
      return true;
    }
  }
}
math1 = zero_negativity([1,-3,0]);
console.log(math1);

//math2

function is_even(num){
  if ( num % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

math2 = is_even(5);
console.log(math2);

//math 3

function how_many_even(array){
  even_nums = [];
  for (var i =0; i <= array.length; i++){
    if (array[i] % 2 == 0){
      even_nums.push(i);
    }
  }
  return even_nums.length;
}

math3 = how_many_even([1,2,3,4,5,6,6,6,6,8,12]);
console.log(math3);

//math 4

function create_dummy_array(n){
  var dumm_array=[];
  for(var i=0; i <= n; i++){
    dumm_array.push(Math.floor(Math.random() *10));
  }
  return dumm_array;
}

math4 = create_dummy_array(5);
console.log(math4);

//math 5

function random_choice(array){
  n = array.length;
  random_index = Math.floor(Math.random() * n);
  return array[random_index];
  }

math5 = random_choice([1,4,7,2,4]);
console.log(math5);
