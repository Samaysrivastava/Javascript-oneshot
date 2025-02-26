const userEmail = "";
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
/* 
  falsyvalues 
  false,0,-0,BigInt,0n,"",null,undefined,NaN
   
   truthy values
   "0","false",[],{},function(){},true
*/
// here we have a truthy value we dont need to compare

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}