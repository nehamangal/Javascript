// **==**  //
var a = 23;
var b = 45;

console.log(a==b)       //Return false 

var a = 12;
var b = 12;

console.log(a==b)    //Return true



// **===**  //

var a = 23;
let c = 23;

console.log(a===b)      //Return false      ***===** it checks value+datatypes


let d = 23;
let e = 23;

console.log(d===e)   //Return true


// Greater than //
var a = 12;
var b = 23

console.log(a>b)      //Return false;


//Less Than  // 
console.log(a<b)    //Return true;

// ** NotEqual ** //
var a = 3;
let b = 2;

console.log(a!=b)   //Return true
console.log(a!==b)  // Return true

// Ternary Operator 
var a = (a>20)? 'true' : 'false'
console.log(a);         // return false