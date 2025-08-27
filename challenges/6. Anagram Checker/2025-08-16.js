//Daily Challenge: Aug 16, 2025: Anagram Checker

/*
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.
*/

function areAnagrams(str1, str2) {
  //Eliminar caracteres especiales y pasar a minusculas ambas cadenas
  const formatted1 = str1.replace(/\s/, "").toLowerCase();
  const formatted2 = str2.replace(/\s/, "").toLowerCase();

  //Ordenar las letras de cada cadena
  const sorted1 = formatted1.split("").sort().join("");
  const sorted2 = formatted2.split("").sort().join("");

  //Comprobar si ambas cadenas tienen los mismos caracteres
  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("Hello", "World")); // false
console.log(areAnagrams("The Morse Code", "Here come dots")); // true