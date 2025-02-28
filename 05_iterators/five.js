// console.log("hello");
const coding = ["js", "c++", "python", "java"];

coding.forEach(function (val){
    // console.log(val);
})
// using arrow function
coding.forEach((val)=>{
    // console.log(val);
})
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding .forEach((item,index,arr)=>{
    // console.log(item,index,arr);
   
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

// console.log(myCoding);
myCoding.forEach((item)=>{
    console.log(item.languageFileName," ",item.languageName);
})
