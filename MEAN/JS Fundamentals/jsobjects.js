let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

test1 = students[0].name;
console.log(test1);
for (var i=0; i < students.length; i++){
let student = students[i];
  console.log("Name: " + student.name + ", Cohort: " + student.cohort);
}


//challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
console.log("EMPLOYEES:");
employee = users['employees'];
for(var i =0; i< employee.length; i++){
let number = i +1;
let full_name = employee[i].last_name.toUpperCase() + ', '+  employee[i].first_name.toUpperCase();
console.log( number +' - ' + full_name + ' - ' + (full_name.length-1) );
}
console.log("MANAGERS:");
manager = users['managers'];
for(var i =0; i< manager.length; i++){
let number = i +1;
let full_name = manager[i].last_name.toUpperCase() + ', '+  manager[i].first_name.toUpperCase();
console.log( number +' - ' + full_name + ' - ' + (full_name.length-1) );
}
