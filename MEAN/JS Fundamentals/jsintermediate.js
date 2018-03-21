//Part 1
function starString(num){
  let star = '*';
  let string = '';
  for(var i=0; i < num; i++){
    string += star;
  }
  return string;
}

let stars = starString(5);
console.log(stars);

//part 2

  function drawStars(array){
    let star = "*";
    let each_num = 0;
    for(var i=0; i <= array.length; i++){
        each_num = array[i];
        //console.log(each_num);
        let string = '';
        for(var j=0; j < each_num; j++){
          string += star;
      }
      console.log(string);
    }
  }


  let x = [4, 6, 1, 3, 5, 7, 25]
  let test1 = drawStars(x);
  console.log(test1);

  //part 3 modification


    function drawCoolStars(array){
      let star = "*";
      let each_num = 0;
      for(var i=0; i <= array.length; i++){
        each_num = array[i];
        if (typeof array[i] != 'number'){
          star = array[i][0].toLowerCase();
        }
          let string = '';
          for(var j=0; j < each_num; j++){
            string += star;
        }
        console.log(string);
      }
    }


    let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
    let test2 = drawCoolStars(x);
    console.log(test2);
