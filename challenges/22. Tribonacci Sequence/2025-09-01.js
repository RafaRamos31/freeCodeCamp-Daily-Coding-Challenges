//Daily Challenge: Sept 1, 2025: Tribonacci Sequence

/*
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
*/

function tribonacciSequence(startSequence, length) {
  //Initializate container
  const triboArray = [];

  //Empty array at length 0
  if(length == 0){
    return triboArray;
  }

  //Adding start sequence first element
  triboArray.push(startSequence[0])

  if(length == 1){
    return triboArray;
  }

  //Adding start sequence second element
  triboArray.push(startSequence[1])

  if(length == 2){
    return triboArray;
  }

  //Adding start sequence third element
  triboArray.push(startSequence[2])

  //Generating new tribonacci elements
  for(let i = 0; i <= length - 4; i++){
    //Getting the last 3 numbers
    const first = triboArray[i];
    const second = triboArray[i+1];
    const third = triboArray[i+2];

    //Adding the sum of the three numbers
    triboArray.push(first+second+third);
  }

  //Returning the complete sequence
  return triboArray;
}

console.log(tribonacciSequence([0, 0, 1], 10)); // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
console.log(tribonacciSequence([1, 1, 1], 6)); // [1, 1, 1, 3, 5, 9]
console.log(tribonacciSequence([0, 1, 1], 5)); // [0, 1, 1, 2, 4]
console.log(tribonacciSequence([1, 2, 3], 0)); // []