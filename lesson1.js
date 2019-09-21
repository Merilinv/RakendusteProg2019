console.log("Hello World!");

 function simpleArraySum (xs) {
  let sum = 0;
  
  xs.forEach( (i)=>{
    sum = sum + i;

  })
  return sum;
}
let a = simpleArraySum([1, 2, 6]);
console.log(a);


