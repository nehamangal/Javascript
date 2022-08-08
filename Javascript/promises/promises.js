var a = 12;
var b = 40;
let prom = new Promise(function(resolve,reject){
  console.log("Fetching data")
  setTimeout(()=>{
    if(a>b){
      resolve("Successful!!");
    }
    else{
      reject("Faliure!!");
    }

  },1000)
  


})

prom.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
  
  })