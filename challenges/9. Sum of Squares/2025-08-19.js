//Daily Challenge: Aug 19, 2025: Sum of Squares

/*
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
*/

function sumOfSquares(n) {
  //Caso base
  if(n == 0){
    return 0;
  }

  //Caso recursivo
  return n * n + sumOfSquares(n-1);
}

console.log(sumOfSquares(3)); // 14
console.log(sumOfSquares(0)); // 0
console.log(sumOfSquares(5)); // 55
console.log(sumOfSquares(10)); // 385
