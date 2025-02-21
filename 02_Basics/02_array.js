// console.log("array");
const marvel_heros = ["thor", "ironman", "spiderman"];  
const dc_heros = ["superman", "flash", "batman"];
// marvel_heros.push(dc_heros); // it insert array into array
// push operation works on existing array
// console.log(marvel_heros); 

const allheros = marvel_heros.concat(dc_heros);
// concate operation does not works on existing array
console.log(allheros);
// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


// note
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realUsable = anotherArr.flat(Infinity);
console.log(realUsable);
// to check given data is array or not
console.log(Array.isArray("hello")); //false
console.log(Array.from("hello"));   
console.log(Array.from({name:"samay"})); // return empty array //interesting case
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

