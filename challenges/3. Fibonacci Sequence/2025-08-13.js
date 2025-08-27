//Daily Challenge: Aug 13, 2025: Fibonacci Sequence

/*
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
*/

function fibonacciSequence(startSequence, length) {
  //Initializate container
  const fiboArray = [];

  //Empty array at length 0
  if(length == 0){
    return fiboArray;
  }

  //Otherwise, add start sequence first element
  fiboArray.push(startSequence[0])

  //Single element at length 1
  if(length == 1){
    return fiboArray;
  }

  //Adding start sequence second element
  fiboArray.push(startSequence[1])

  //Generating new fibonacci elements
  for(let i = 0; i <= length - 3; i++){
    //Getting the last 2 numbers
    const first = fiboArray[i];
    const second = fiboArray[i+1];

    //Adding the sum of both numbers
    fiboArray.push(first+second);
  }

  //Returning the complete sequence
  return fiboArray;
}

console.log(fibonacciSequence([0, 1], 10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciSequence([2, 3], 5)); // [2, 3, 5, 8, 13]
console.log(fibonacciSequence([5, 8], 0)); // []
console.log(fibonacciSequence([1, 1], 1)); // [1]