//time running program

var hour="";
var minute = '';
var period '';

function tellTime( hour, minute, period){
  if (minute > 30){
    if (period = "AM"){
      console.log("It's just after" + hour "in the morning");
    }
    else if (period = "PM"){
      console.log("It's just after" + hour " in the evening");
    }
  }
  else if(minute < 30){
    if (period = "AM"){
      console.log("It's almost" + hour "in the morning");
    }
    else if (period = "PM"){
      console.log("It's almost" + hour " in the evening");
    }
  }
}
