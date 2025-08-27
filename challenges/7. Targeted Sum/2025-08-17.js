//Daily Challenge: Aug 17, 2025: Targeted Sum

/*
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.
*/

function findTarget(arr, target) {

  //Ciclo que irá comparando un numero con el resto de valores del arreglo
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      //No comparar un numero consigo mismo
      if(i == j) continue;

      //Retornar los indices que cumplen la suma
      if(arr[i] + arr[j] == target){
        return [i, j];
      }
    }
  }

  //Valor de retorno en caso de que no se cumpla ningun caso
  return "Target not found";
}

console.log(findTarget([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(findTarget([10, 15, 3, 7], 17)); // [0, 3]
console.log(findTarget([1, 2, 3, 4], 8)); // "Target not found"
console.log(findTarget([0, -1, 2, -3, 1], -2)); // [3, 4]
