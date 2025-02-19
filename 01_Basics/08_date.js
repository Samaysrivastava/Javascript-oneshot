let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);
let myCreatedDate = new Date(2023,0,23,5,3); // month starts from 0
console.log(myCreatedDate.toLocaleString());
let myCreatedDate1 = new Date("01-14-2024");
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // in milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
    
})
