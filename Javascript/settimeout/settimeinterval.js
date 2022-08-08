
//  1 second = 1000 milisecond
var count = 0;

const func=()=>{
    count++;
    console.log(count);
}
setInterval(func,2000)       // print the number in every 2 second


