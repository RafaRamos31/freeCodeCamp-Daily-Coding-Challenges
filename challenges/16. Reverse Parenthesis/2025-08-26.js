//Daily Challenge: Aug 26, 2025: Reverse Parenthesis

/*
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.
*/

function decode(s) {
  //Copia del string original
  let content = s;

  //Expresion regular para encontrar un parentesis que no tenga mas parentesis dentro
  const innerParentheses = /\([^()]*\)/

  //Bucle que se repite hasta que no se encuentren mas parentesis
  while(true){
    //Se hace la busqueda de parentesis en el string
    let fragments = content.match(innerParentheses);

    //Terminar el ciclo si no se encuentran mas parentesis
    if(!fragments) break;

    //Se selecciona el primer parentesis encontrado
    const fragment = fragments[0];

    //Se eliminan los parentesis y se invierte el contenido
    const decodedFragment = fragment.slice(1, -1).split("").reverse().join("");

    //Se reemplaza el fragmento original por el fragmento decodificado
    content = content.replace(fragment, decodedFragment);
  }

  //Retornar el string final
  return content;
}

console.log(decode("test with no parenthesis")); // "test with no parenthesis"
console.log(decode("(f(b(dc)e)a)")); // "abcdef"
console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)")); // "Can you read this?"
console.log(decode("f(Ce(re))o((e(aC)m)d)p")); // "freeCodeCamp"