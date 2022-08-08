//Filter
const arr2 = [1,2,3,4,5]
const even = arr2.filter(isEven);
function isEven(value){
  return value%2===0;

}
console.log(even);


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

const sep = obj.filter(people=>people.age>=19)
console.log(sep);
