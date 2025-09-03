//Daily Challenge: Sept 3, 2025: Pangram

/*
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

*/

function isPangram(sentence, letters) {
  //Convertir la oración a minúsculas y eliminar caracteres no alfabéticos
  sentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

  //Verificar si cada letra en 'letters' está presente en 'sentence'
  for (let char of letters) {
    if (!sentence.includes(char)) {
      return false;
    }
  }

  //Verificar si 'sentence' contiene solo las letras en 'letters'
  for (let char of sentence) {
    if (!letters.includes(char)) {
      return false;
    }
  }

  //Si todas las letras están presentes y no hay letras adicionales, retornar true
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog", "abcdefghijklmnopqrstuvwxyz")); // true
console.log(isPangram("Hello, World!", "helo")); // true
console.log(isPangram("Hello, World!", "heloz")); // false
console.log(isPangram("This is not a pangram", "abcdefghijklmnopqrstuvwxyz")); // false