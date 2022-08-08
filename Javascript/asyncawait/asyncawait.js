
function call(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Calling1")
        
        
        },2000)
        
        })
}

function call2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Calling2")
        
                },2000)
        
        })
}


async function asyncall(){
    console.log("Waiting!")                              // Return Waiting
    var res = await call()
    console.log(res)                                  // Return Calling1

    var res1 = await call2()
    console.log(res1);                                 // Return Calling2
}

asyncall()