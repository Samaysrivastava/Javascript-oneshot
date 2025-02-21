const tinderUser = new Object(); // object constructor
// const tinderUser = {}; // object literals
console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// object inside object
const regularUser = {
    email:"samay@google.com",
    fullname: {
        userfullname: {
            firstname:"samay",
            lastname:"srivastava"
        }
    }
}
console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// interestin
// const obj1 = {1:"a",2:"b"};
// const obj2 = {2:"c",4:"d"};
// const obj3 = {obj1,obj2};
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2);
// the empty object is given as target
// console.log(obj3);

const obj3 = {...obj1,...obj2}; // spread operator
console.log(obj3);


// format in which we get data from api
const users = [
    {
        id: 1,
        email: "j2V4t@example.com",
    },
    {
        id: 2,
        email: "j2V4t@example.com",
    }

]
// users[1].email;
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));  //get all keys  we get values in array it return an array of keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // return an array of arrays
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //return true if property exists

const req = {
    email: "j2V4t@example.com",
    password: "123456",
    username: "samay"
};

// const {email,password,username}=req; // destructuring
// console.table([email,password,username]);

