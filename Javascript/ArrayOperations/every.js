//Every
var arr1 = [0,2,3,4,5]
var isposi = arr1.every(isPositive);
function isPositive(value){
  return value>=0;

}
console.log(isposi);         // Return true


var obj1 = [
    {
    name:"neha"
  
    },
    {
        name:"oshi"
        
    }
    ,{
        name:"aayushi"
       
    }
]

var prop = obj1.every(people=>people.name!=undefined)  // Return true
console.log(prop);