//Some
var arr1 = [0,2,3,4,5]
var isposi = arr1.some(isgreater);
function isgreater(value){
  return value>4;

}
console.log(isposi);         // Return true


var obj1 = [
    {
    name:"neha",
    age:16

  
    },
    {
        name:"oshi",
        age:14
        
    }
    ,{
        name:"aayushi",
        age:118
       
    }
]

var prop = obj1.every(people=>people.age>=16)    // Return false
console.log(prop);
