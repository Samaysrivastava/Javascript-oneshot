// IIFE --> Immediately Invoked Function Expression 
(function connectDB(){
    console.log(`Connected to DB1`);
})();
// connectDB();
// global scope ke pollution ko hatane ke liye

// ()() ==> IIFE  the first parenthesis is for func definition and second one is for invoking


((name)=>{
    console.log(`Connected to DB2 ${name}`);
})('sama');