module.exports = function (){
  return {
    add: function(num1, num2) {
         let sum = num1 + num2;
         return sum
    },
    multiply: function(num1, num2) {
         return num1*num2
    },
    square: function(num) {
        return num**2
    },
    random: function(num1, num2) {
        let min = num1;
        let max = num2;
        if (num1 > num2){
          min = num2;
          max = num1;
        }
         return Math.random()*(max-min) + min;
    }
  }
};
