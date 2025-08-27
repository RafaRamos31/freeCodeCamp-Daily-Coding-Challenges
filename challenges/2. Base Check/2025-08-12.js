//Daily Challenge: Aug 12, 2025: Base Check

/*
Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.
Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z
*/

function isValidNumber(n, base) {
  //Cadena con los posibles valores segun base
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";

  //Error handler en caso de base fuera del rango 2-36
  if(base < 2 || base > 36){
    console.log("Invalid base number");
    return false;
  }

  //Determinar expresion evaluadora segun la base ingresada
  const range = characters.slice(0, base);
  const evaluator = new RegExp(`[${range}]`, "gi");

  //Eliminar caracteres validos para verificar si quedan caracteres sin borrar
  const invalids = n.replace(evaluator, "");

  //Si no hay caracteres invalidos, el número y su base son correctos
  return invalids.length == 0;
}

console.log(isValidNumber("10101", 2)); // true
console.log(isValidNumber("10201", 2)); // false
console.log(isValidNumber("G1", 16)); // false
console.log(isValidNumber("10101", 1)); // error