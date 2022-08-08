
//Object
const obj ={
name:"Neha",
course:"Btech",
branch:"CS",
diff_courses:["Btech","Bsc"],
diff_branches:{
  first_course:"CSE",
  second_course:"IT"

}
}

console.log(obj)    //Return all objects
console.log(obj.name)  //Return only name property
console.log(obj.diff_courses[0]) // return Btech
console.log(obj.diff_branches.first_course) // return firts course


const obj1 = {
  name:"Neha",
  branch:"CS",
  newfunction : function(){
      return this.name
  }
}

console.log(
 obj1.newfunction()       //Return Neha
)


