// memory initialization
// stack memory->primitive values
// heap memory->non primitive values
// stack ke andar copy milta hai
// heap ke andar reference milta hai

let myName =  "samay";
let anotherName = myName;
anotherName = "jane";
// console.log(myName);
// console.log(anotherName);

let userOne = {
    email: "j2V4t@example.com",
    upi: "user@ybl",
    phone: 1234567890
}

let userTwo = userOne;
console.log(userOne);
console.log(userTwo);
userTwo.phone = 9876543210;
console.log("after changing phone number");
console.log(userOne);
console.log(userTwo);
