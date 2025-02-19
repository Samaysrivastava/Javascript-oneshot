// numbers
const score = 400;
console.log(score);
const balance = new Number(32.454382);  //using constructor
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //fixed decimal places
const otherNumber = 1123.4567;
console.log(otherNumber.toPrecision(3));  //1.12e+3
const hundreds = 1050000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(typeof hundreds);
// const mini = Number.MIN_VALUE;
// const max = Number.MAX_VALUE;
// console.log(mini);
// console.log(max);

console.log("lets study about maths in js");

// maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5)); //5
console.log(Math.ceil(6));
console.log(Math.ceil(4.3)); // give value just greater in case of decimal
console.log(Math.floor(4.3)); // give value just smaller in case of decimal
console.log(Math.min(3,4,5,6,7));
console.log(Math.max(3,4,5,6,7));
console.log(Math.random());  // give value between 0 and 1
// console.log(Math.random()*10+1);  
console.log(((Math.random()*10)+1).toFixed());  // give value between 1 and 10
const min = 10;
const max =  20;
console.log(Math.floor(Math.random()*(max-min+1)+min));