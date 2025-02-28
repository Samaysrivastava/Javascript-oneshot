// const coding = ["js", "c++", "python", "java"];
// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9];
// const newNums = myNums.filter((num)=>num > 4)
// const newNums2 = myNums.filter((num)=>{
//     return num > 4  //jb scope ke andar return krna hota hai tb return keyword use krna hota hai
// })
// console.log(newNums);   
// console.log(newNums2);   


// const newNums = [];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title:"Book one" , genre:"Fiction" , publish:2018,edition:2},
    {title:"Book two" , genre:"Fiction" , publish:2019,edition:3},
    {title:"Book three" , genre:"Fiction" , publish:2020,edition:2},
    {title:"Book four" , genre:"science" , publish:2021,edition:1},
    {title:"Book five" , genre:"math" , publish:2022,edition:5},
    {title:"Book six" , genre:"physics" , publish:2023,edition:2}
]
let userBooks = books.filter((bk)=>{return bk.publish >2022})
console.log(userBooks);
