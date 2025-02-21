// functions in js
// function is a block of reusable code
function sayName(){
    console.log("samay");
}
// sayName();

function addTwo(number1,number2){
    // console.log(number1+number2); //number1+number2  
    let a = number1+number2;
    return a;
}
// addTwo()// NaN
// addTwo(3,4);
const result = addTwo(3,4);
console.log("result = ",result);


function loginUserMessage(username="samaaah"){
    if(!username){
        console.log("please enter username...");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("samay"));
console.log(loginUserMessage()); // undefined just logged in 
console.log(loginUserMessage("hitehs"));




function calculateCartPrice(...num1){
    return num1;
}

const total = calculateCartPrice(200,400,600);// here only 200 is passed
/* 
 restoperator is used to pass variable number of arguments
 */
console.log("total = ",total);



function calculateCartPrice1(num1,...num2){
    console.log(num1);
    console.log(typeof num2);
    console.log(typeof num1);
    console.log(num2);
}

calculateCartPrice1(200,400,600,800);


const user = {
    username:"hitesh",
    price: 999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "samay",
    price: 9199
});


const myNewArray = [200,400,600,800];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
