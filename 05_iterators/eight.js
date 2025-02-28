// reduce method
const nums = [1,2,3];

// const sum =  nums.reduce(function(acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// },0)
const sum =  nums.reduce((acc,curr)=>acc + curr,0)

console.log(sum);

const shoppingCart = [
    {
        name:"shoes",
        price: 4000
    },
    {
        name:"pant",
        price: 3000    
    },
    {
        name:"shirt",
        price: 2000
    },
    {
        name:"socks",
        price: 1000
    }
]
let initial = 0;
const total_amount = shoppingCart.reduce((acc,curr)=>acc+curr.price,initial);
console.log(total_amount);
console.log(initial);