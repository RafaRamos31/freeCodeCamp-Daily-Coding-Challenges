//Daily Challenge: Aug 11, 2025: Vowel Balance

/*
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.
*/

function isBalanced(s) {
  //Dividir la cadena en dos mitades, ignorando el caracter central si existe
  const first = s.slice(0, Math.floor(s.length / 2))
  const second = s.slice(Math.ceil(s.length / 2))

  //Eliminar los caracteres que no sean vocales de ambas mitades
  const regexp = /[^aeiou]/gi
  const firstVowels = first.replace(regexp, "")
  const secondVowels = second.replace(regexp, "")

  //Comparar y retornar el tamaño de ambas mitades
  return firstVowels.length === secondVowels.length;
}

console.log(isBalanced("book")); // true
console.log(isBalanced("textbook")); // false
console.log(isBalanced("MerryChristmas")); // false
console.log(isBalanced("AbCdEfGh")); // true
