//Daily Challenge: Aug 14, 2025: S P A C E J A M

/*
Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).
*/

function spaceJam(s) {
  //Eliminar espacios en blanco y convertir a mayusculas
  const whitespaces = /[\s]+/g;
  const compacted = s.replace(whitespaces, "").toUpperCase();

  //Convertir en un arreglo y luego separar por doble espacio
  const spaceJam = compacted.split("").join("  ");

  return spaceJam;
}

console.log(spaceJam("I believe I can fly!")); // "I  B  E  L  I  E  V  E  I  C  A  N  F  L  Y  !"
console.log(spaceJam("Space Jam")); // "S  P  A  C  E  J  A  M"
console.log(spaceJam("  Hello   World  ")); // "H  E  L  L  O  W  O  R  L  D"
console.log(spaceJam("123 ABC abc!")); // "1  2  3  A  B  C  A  B  C  !"