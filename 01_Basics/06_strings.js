const name = "samay";
const age = 21;
// console.log(name + " is " + age + " years old"); // outdated way of concatenation
// console.log(`hello everyone my name is  ${name.toUpperCase()} i am ${age} years old`);
// declaration of string
const gameName = new String("GtaSanAndreas");  // using string constructor
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName);
// console.log(gameName.indexOf("a"));
// console.log(gameName.lastIndexOf("a"));

const newString = gameName.substring(0,4); //here negative values are not possible 
const anotherString = gameName.slice(-12,4);
// console.log(newString);
console.log(anotherString);



const newStringOne = "   samay    ";
console.log(newStringOne);
console.log(newStringOne.trim());  //remove whitespaces
// trim start
// trim end
console.log(newStringOne);
const url = "https://samay.com/samay%20srivastava";
url.replace('%20', '-');
console.log(url.replace('%20', '-'))
console.log(url.includes('%20'));
console.log(url.includes('%0'));


const  para = "hello everyone how are u";
const stringArray=para.split(' ');

// console.log(para.split('-'));
console.log(stringArray);

