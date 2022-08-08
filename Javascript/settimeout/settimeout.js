
var count=0;
const myevent=()=>{
  count++;
  console.log(count);
}

setTimeout(myevent,1000)     //print only one time in 1 sec
setInterval(myevent,1000)      //continue print in every 1 sec