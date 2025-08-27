//Daily Challenge: Aug 18, 2025: Factorializer

/*
Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.
*/

function factorial(n) {
  //Caso base
  if(n == 0){
    return 1;
  }

  //Caso recursivo
  return n * factorial(n-1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(10)); // 3628800
console.log(factorial(20)); // 2432902008176640000