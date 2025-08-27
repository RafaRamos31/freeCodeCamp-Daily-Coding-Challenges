//Daily Challenge: Aug 20, 2025: 3 Strikes

/*
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

function squaresWithThree(n) {
  //Inicializar contador de ocurrencias
  let total = 0;

  //Bucle para encontrar resultados hasta el número ingresado
  for(let i=1; i<=n; i++){
    //Se calcula el cuadrado del numero actual y se convierte a texto
    let square = "" + (i * i);

    //Se verifica que el número contenga al menos un 3
    if(square.includes("3")){
      total = total + 1;
    }
  }

  //Se retorna el total de ocurrencias encontradas
  return total;
}

console.log(squaresWithThree(1)); // 0
console.log(squaresWithThree(10)); // 1
console.log(squaresWithThree(50)); // 6
console.log(squaresWithThree(100)); // 19