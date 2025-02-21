// singleton object->jb constructor se bnate hai tb singleton bnta hai
// Object.create(); // constructor singleton bnta hai
// onject literals
const mySym = Symbol();
const jsUser = {
    // key: value
    "name": "samay",
    age:18,
    location:"jaipur",
    email:"samay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"],
    [mySym]:"my symbol key"
};
// myArray = ["samay","ranveer","ashish"];
console.log(jsUser);
console.log(jsUser["name"]);
console.log(jsUser.email);
console.log(jsUser["email"]); //correct way

console.log(jsUser[mySym]); // correct way
// way to change value
jsUser.email="harsh@gmail.com";
console.log(jsUser.email);

// freeze object 
// Object.freeze(jsUser);  // by this we cannot perform  changes on object
jsUser.email="harsh@gmail.com";
console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
// console.log(jsUser.greeting); //return function
console.log(jsUser.greeting2()); 


console.log(jsUser);



