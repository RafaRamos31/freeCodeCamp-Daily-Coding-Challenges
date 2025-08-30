//Daily Challenge: Aug 30, 2025: Array Duplicates

/*
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.

*/

function findDuplicates(arr) {
  //Objeto para contar ocurrencias de cada número
  let count = {};

  //Array para los duplicados
  let arrDuplicates = [];

  //Contar ocurrencias
  for(let i = 0; i < arr.length; i++){
    //Se suma a uno ya existente, si no se crea
    if(count[arr[i]]){
      count[arr[i]]++; 
    } else {
      count[arr[i]] = 1;
    }

    //Si hay más de una ocurrencia y no está en el array, se agrega
    if(count[arr[i]] === 2){
      arrDuplicates.push(arr[i]);
    }
  }
  //Ordenar el array de duplicados
  return arrDuplicates.sort((a, b) => a - b);;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3])) // [1, 2, 3]
console.log(findDuplicates([5, 5, 5, 5, 5])) // [5]
console.log(findDuplicates([1, 2, 3, 4, 5])) // []
console.log(findDuplicates([10, 20, 10, 30, 20, 40, 50, 30])) // [10, 20, 30]