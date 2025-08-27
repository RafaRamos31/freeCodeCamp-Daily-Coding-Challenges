//Daily Challenge: Aug 15, 2025: Jbelmud Text

/*
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.
*/

function jbelmu(text) {
  //Separar el texto en palabras
  const words = text.split(" ");

  //Transformar cada palabra
  const jbelmudWords = words.map(word => {  
    //Palabras con 2 o menos letras no se transforman
    if(word.length <= 2) return word;

    //Separar la palabra en letras
    const letters = word.split("");

    //Extraer la primera y ultima letra
    const firstLetter = letters.shift();
    const lastLetter = letters.pop();

    //Ordenar las letras restantes alfabeticamente
    const middleLetters = letters.sort().join("");

    //Unir las partes de la palabra transformada
    return firstLetter + middleLetters + lastLetter;
  });

  //Unir las palabras transformadas en una sola cadena
  return jbelmudWords.join(" ");
}

console.log(jbelmu("hello world")); // "hello wlord"
console.log(jbelmu("a quick brown fox jumps over the lazy dog")); // "a qciuk borwn fox jmpus oevr the lazy dog"
console.log(jbelmu("javascript is fun")); // "jaaciprsvt is fun"
console.log(jbelmu("programming challenges are exciting")); // "pagimmnorrg caeeghllns are eciintxg"