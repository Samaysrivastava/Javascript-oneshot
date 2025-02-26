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


