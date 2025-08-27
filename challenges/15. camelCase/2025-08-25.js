//Daily Challenge: Aug 25, 2025: camelCase

/*
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
*/

function toCamelCase(s) {
  //Se define el separador para el string ingresado
  const separator = /[\s-_]+/;

  //Se crea un arreglo con las palabras individuales
  const words = s.split(separator);

  //Se capitalizan las palabras
  const capitalized = words.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());

  //Se juntan las palabras capitalizadas sin dejar espacio
  const joined = capitalized.join("");

  //Se corrige la primera mayuscula
  const result = joined.charAt(0).toLowerCase() + joined.slice(1)

  return result;
}

console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("This_is-a test")); // "thisIsATest"
console.log(toCamelCase("convert THIS-string_to camelCase")); // "convertThisStringToCamelcase"
console.log(toCamelCase("  multiple   separators--here__")); // "multipleSeparatorsHere"