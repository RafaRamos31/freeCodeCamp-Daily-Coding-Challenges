//Daily Challenge: Aug 27, 2025: Unorder of Operations

/*
Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.
*/

function evaluate(numbers, operators) {
  //Valor inicial del resultado, con el primer numero
  let result = numbers[0];

  //Variable para recorrer el arreglo de operadores
  let p = 0;

  //Se recorre el arreglo de numeros
  for(let i=1; i<numbers.length; i++){
    //Toma de decisión en base al operador actual
    switch (operators[p]) {
      case "+":
        result = result + numbers[i];
        break;
      case "-":
        result = result - numbers[i];
        break;
      case "*":
        result = result * numbers[i];
        break;
      case "/":
        result = result / numbers[i];
        break;
      case "%":
        result = result % numbers[i];
        break;
      default:
        result = result;
    }

    //Se pasa al siguiente operador
    p = p + 1;

    //Se reinicia el recorrido de operadores de ser necesario
    if(p == operators.length){
      p = 0;
    }
  }
  return result;
}

console.log(evaluate([1, 2, 3, 4, 5], ['+', '*'])); //65
console.log(evaluate([11, 5, 2], ['-', '/'])); //3
console.log(evaluate([8, 4, 2, 1], ['/', '+'])); //4
console.log(evaluate([10, 3, 2, 2], ['%', '+'])); //1