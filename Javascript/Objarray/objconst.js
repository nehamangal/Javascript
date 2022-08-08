
const info = new Prsn()
function Prsn(first,second){

    this.name ="Neha",
    this.age=18
   this.func = function(){
    return "function calling"
   }

     this.skills={
            first:"C++",
            second:"DSA"
     }
    
}


console.log(info)              // Return obj
console.log(info.name)         // Retun Neha
console.log(info.skills)          // Return skills object



