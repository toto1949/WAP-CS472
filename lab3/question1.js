"use strict";

const computeSumOfSquares = (arr) => {
  return arr.map(num => num * num).reduce((acc, curr) => acc + curr, 0);
};

let result  = computeSumOfSquares([5,2,5,6,13])
console.log("Result for 'a'" +result)

//b
function printOddNumbersOnly(arr) {
    arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
}
printOddNumbersOnly([7,4,5,9,2,10])
//c
const printFibo = function(n, a, b) {
    let result = [];
    
    if (n >= 1) result.push(a);
    if (n >= 2) result.push(b);
  
    for (let i = 3; i <= n; i++) {
      let nextFibo = a + b;
      result.push(nextFibo);
      a = b;
      b = nextFibo;
    }
  
    console.log(result.join(", "));
  };
  printFibo(10, 0, 1);


