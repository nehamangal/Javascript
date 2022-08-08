
//In object
const obj = {
    name:"Neha",
    branch:"CS"
}

const obj2 = {
    ...obj,
    age:18
}

console.log(obj2.name)      // Return Neha
console.log(obj.age)         // Undefined



// In array
const arr = [1,2,3,4,5]
const newrr = [...arr,10]
console.log(newrr[5])      // Return 10;
console.log(arr[5])         // Return Undefined



