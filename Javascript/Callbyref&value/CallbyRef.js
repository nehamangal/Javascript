// Call by reference done with the non-primitive type values just like array,functions,object

// Call By reference
const a1 = {

    name:"neha",
    branch:"CS"
}

const a2 = a1;
a2.branch = "IT";

console.log(a1)
console.log(a2)


