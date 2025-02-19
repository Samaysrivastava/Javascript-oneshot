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
