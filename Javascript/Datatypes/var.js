// We can redeclare the varible in the var datatype and it is used in globally
// Var
var b = 7;
console.log(b);        //Output is 7;
const fun=()=>{
b = 10;
console.log(b);             //Output is : 10
}
fun();

console.log(b)          // Output is :10