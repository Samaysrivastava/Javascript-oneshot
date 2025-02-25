const user = {
    username:"samayraina",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to webpage`); 
        // console.log(this);
    }
    //this refers current context
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);// empty object
// but when we try to access this using browser it return window object 

// Arrow function

function runCar(){
    let username = "samayraina";
    // console.log(this); //undefined

}
// runCar();

const runCar1 = ()=>{
    let name = "ferrari";
    console.log(this);  //empty object
}

// runCar1();

// const addTwo = (num1,num2)=>{
//    return num1+num2;
// }
//alternate way
// const addTwo = (num1,num2)=>(num1+num2)  //implicit return 

// curly brace use hoga to return statement likhna pdega 

// console.log(addTwo(3,4));

// returning object
const getObject = ()=>(
    {username:"samayRaina",price:999}
    // if we are returning object then we need to use parenthesis
)
// console.log(getObject());


const myArray = [2,3,4,5,5];
