// for of
const arr = [1,2,3,4,5];
for(const num of arr){
    console.log("num =>",num);
}

const greeting  = "hey..whatsup....";
for(const greet of greeting){
    if(greet=='.') continue;
    console.log(`each character is ${greet}`);
}

// Maps->similar to array
const myMap = new Map();
myMap.set("IN","india");
myMap.set("US","united states");
myMap.set("FR","france");
myMap.set("IN","india");  
console.log(myMap);
// console.log(myMap.get("IN"));
// for(const [key,value] of myMap){
//     console.log(key,"=>",value);
// }


// destructing

for(const [key] of myMap){
    console.log(key);
}
for(const [value] of myMap){
    console.log(value);
}

const myObject = {
    game1:"pubg",
    game2:"free fire",
    game3:"cod"
}
// console.log(myObject);
/*
for(const [key,value] of myObject){
   object is not iterable
}
*/
