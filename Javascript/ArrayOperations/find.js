//Filter
const arr2 = [1,2,3,7,5]
const even = arr2.find(isEven);
function isEven(value){
  return value%2===0;

}
console.log(even);                        // return the first value that is 2


const obj = [
    {
    name:"neha",
    age:19
    },
    {
        name:"oshi",
        age:18
    }
    ,{
        name:"aayushi",
        age:20
    }
]

const sep = obj.find(people=>people.name=="oshi").age
console.log(sep);                                         // return 18