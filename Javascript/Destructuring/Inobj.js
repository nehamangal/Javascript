// In object
const obj1 = {
    name:"neha",
    branch:"CS",
    info : function(){
  return this.name+' ' +this.branch
    }
}

const{name,branch,info} = obj1;
console.log(name);
console.log(branch);
console.log(info);
