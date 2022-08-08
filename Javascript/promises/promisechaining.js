let prom = new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve("Chaining1")

},300)
})

prom.then((result)=>{
    console.log(result)                                       // Chaining1
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("Chaining2")
    },300)


    });                   
}).then((result)=>{
    console.log(result)                                        // Chaining2
    return new Promise((resolve,reject)=>{
     if(result=="Chaining1"){
         resolve("Find")
     }
     else{
      reject("Notfind")
     }

    })                  
}).then((result)=>{
    console.log(result)
    return result                  
}).catch((error)=>{
    console.log(error)                               //Notfind
    return error
})
