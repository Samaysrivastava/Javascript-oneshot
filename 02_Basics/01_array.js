// array
// console.log("array");
// const myArr = [0,1,2,3,4,5];
// console.log(myArr);
// console.log(myArr[1]);
const myArr = new Array(0,1,2,3,4,5);
// shallow copy -> copy share the same reference
// deep copy  -> copy create a new reference
console.log(myArr);
const myHeros = ["shaktiman", "naagraj", "doga"];
console.log(myHeros);
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
console.log(myArr.length);
myArr.unshift(9);  // add element at the start
console.log(myArr);
myArr.shift(); // remove element at the start
console.log(myArr);
console.log(myArr.indexOf(9));
console.log(myArr.includes(3)); // return true or false

const newArr = myArr.join();
console.log(newArr); // convert array into string
console.log(typeof newArr);

const newString = "shaktiman,naagraj,doga";
console.log(newString.split(","));

console.log(myArr);
const myn1 = myArr.slice(1,3); //
console.log(myn1);
const myn2 = myArr.splice(1,3); // manipulates original array
console.log(myn2);
console.log(myArr);
