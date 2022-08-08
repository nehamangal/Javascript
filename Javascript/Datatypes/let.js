
// We cannot redeclare the varible in the char datatype and it is used in block

// Let
let c = 11;
console.log(c)         //Output is 11

const func=()=>{
    let c = 10;
   
        
        console.log(c)     //Output is 10
    
      

}
func()

console.log(c)         //Output is 11
