
// Shallow copy occur in primitive values just like numbers,string etc.
// Shallow Copy
var obj = {
    name :"name",
    branch:"CS"
}

var obj2 = obj;
obj2.name = "Ayushi"

console.log(obj)
console.log(obj2)         //Shallow copy is just as a call by reference