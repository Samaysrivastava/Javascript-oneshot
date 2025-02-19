let score = "33ghh"
let score1 = null;
let isLoggedIn = 1;
console.log(typeof isLoggedIn)
/* 
   if we convert score1 into number it will give 0
   if we convert score into number it will give NaN
   if we convert isLoggedIn into boolean it will give true
   1=>true
   0=>false
   ""=>false
   "bjcjs"=>true
 */
console.log(typeof score);
// console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let value =  3;
let negValue = -value;
// console.log(negValue); 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**10);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = "hitesh";
let str3 = str1+str2;
console.log(str3);
// console.log(1+"2");
// console.log("2"+1+3);
// console.log(2+1+"3");
// console.log(true);
// console.log(1+false);
// console.log(+true); // 1
console.log(1+true);
let num1,num2,num3
num1 = num2 = num3 = 2+2;
console.table([num1,num2,num3]);
let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);
