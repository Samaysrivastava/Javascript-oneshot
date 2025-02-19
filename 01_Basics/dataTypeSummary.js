// data type divided into two category 1-> primitive 2-> non primitive
/*
JavaScript is a dynamic language and not static, which means that variables 
can hold values of different types during runtime. Unlike languages such as Typescript or Java,
you don't need to declare the data type of a variable explicitly.
*/
// primitive data types

// 7 primitive data types
// primitive data types -> call by value  new copy created

// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint   

// reference type (non primitive)
// Array
// Objects
// Functions

const score =  200;
const scoreValue =  200.2;
console.log(typeof scoreValue);
let userEmail;
// console.log(userEmail);
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);  //false
const bigNumber = 90000000000000000000000000000000000000000n;
console.log(typeof bigNumber);

const heros = ["thor", "ironman", "spiderman"];
let myObj = {
    name: "thor",
    age: 100,
}

// console.log(heros);
const myfunction= function(){
        console.log("hello");
}
console.log(typeof myfunction);
console.log(typeof myObj);
console.log(typeof heros);


let employee=[
    {
        id: 1,
        email: "j2V4t@example.com",
    },
    {
        id: 2,
        email: "j2V4t@example.com",
    }
]
console.log(employee);
/* non primitive data types ka data type function hota hai ur function
ka datatype object function hota hai
*/

