var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

 function namesSucks(users){
   for( var i=0; i = users.length; i++){
      var studentNum = 0;
       var instrNum = 0;
     if( users[0] === 'Students'){
       studentNum = i + 1;
       namelength= first_name.length + last_name.length;
       print( studentNum + ' -' first_name[i].toUpperCase +' '+ last_name[i] + ' - ' namelength);
     }
     else if( users[1] === 'Instructors'){
       instrNum = i + 1;
       namelength= first_name.length + last_name.length;
       print( studentNum + ' -' first_name[i].toUpperCase +' '+ last_name[i] + ' - ' namelength);
     }
   }
 }
