//Daily Challenge: Aug 23, 2025: Unnatural Prime

/*
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.
*/

function isUnnaturalPrime(n) {
  let number = n;
  //Convertir numeros negativos
  if(n<0){
    number = n * -1;
  }

  //Comprobar que no sea 0 o 1
  if(number == 0 || number == 1){
    return false;
  }

  //Contador de divisores del numero
  let dividers = 0;

  //Recorrer los enteros de 1 hasta el numero ingresado
  for(let i=1; i<=number; i++){
    if(number % i == 0){
      dividers = dividers + 1;
    }
  }

  //Los numeros primos solo pueden tener 2 divisores
  return dividers == 2;
}

console.log(isUnnaturalPrime(7)); // true
console.log(isUnnaturalPrime(-7)); // true
console.log(isUnnaturalPrime(10)); // false
console.log(isUnnaturalPrime(1)); // false