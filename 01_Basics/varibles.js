const id = 744388;
let age = 30;
let salary;
/*
   prefer not to use var because of issue in block scope and functional scope
*/
var namee = "John Doe";
// id = 76655;   //not allowed
age = 31;
namee= "samay";
// console.log(id);
console.table([id, age, namee,salary]);   
/* 
  salary->undefined 
*/ 

