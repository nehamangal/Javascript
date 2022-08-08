
// Reduce
var arr1 = [0,2,3,4,5]
var total_sum = arr1.reduce(sum,0);
function sum(accumulator,value){
  return accumulator+value;

}
console.log(total_sum); 