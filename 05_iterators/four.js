const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
    
}
// for in loop
console.log("for in loop");
for(const key in myObject){
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["javascript","c++","java","python"]; 
for(const key in programming){
    console.log(key);
    console.log(programming[key]);
}



const myMap = new Map();
myMap.set("IN","india");
myMap.set("US","united states");
myMap.set("FR","france");
myMap.set("IN","india"); 
for(const key in myMap){
    console.log(key); //notpossible
}
// map is not iterable
