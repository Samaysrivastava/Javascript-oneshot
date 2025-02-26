//if
// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     // console.log("condition is true");
// }


const balance = 2000;
// if(balance > 500) console.log("you can withdraw");
// else console.log("you can't withdraw");


// nesting 

if(balance>500){
    console.log("you can withdraw");
}
else if(balance<750){
    console.log("you can withdraw");
}
else{
    console.log("you can't withdraw");
}

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){
    console.log("allow user to buy course");
}
else{
    console.log("don't allow user to buy course");  
}

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail) console.log("user is logged in");


// nullish coalescing operator (??)
let val1;
val1 = 5 ?? 10;
val1 = null ?? 15;
val1 = undefined ?? 25;
console.log(val1);

// ternary operator
// condition ? true : false
const age = 18;

age >= 18 ? console.log("you can vote") : console.log("you can't vote");