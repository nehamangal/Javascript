
function call1(){

return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      
        resolve("calling1")

    },300)
})
   
}

function call2(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          
            resolve("calling2")
    
        },300)
    })
       
}

(async function(){
    const fnc=[call1(),call2()];

    console.log("Waiting!")                             
    var res1 = await Promise.all(fnc)          
    console.log(res1);                             // Return [ 'calling1', 'calling2' ]
})()
