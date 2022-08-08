//  Deep copy occue in non primitive value just like array,object,function
//Deep Copy
var newobj = {
    name :"Neha",
    branch:"CS"
}


var obj2 = JSON.parse(JSON.stringify(newobj))
obj2.name = "Ayushi"                //it only change in the obj2
console.log(newobj)               
console.log(obj2);                 
