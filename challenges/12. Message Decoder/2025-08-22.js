//Daily Challenge: Aug 22, 2025: Message Decoder

/*
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
*/

function decode(message, shift) {
  //Alfabeto en minusculas y mayusculas
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //Variable para almacenar el mensaje decodificado
  let decodedMessage = "";

  //Recorrer cada caracter del mensaje
  for(let char of message){
    //Verificar si el caracter es una letra minuscula
    if(lowerAlphabet.includes(char)){
      //Encontrar la posicion original de la letra y aplicar el desplazamiento
      let decodedIndex = (lowerAlphabet.indexOf(char) - shift + 26) % 26;
      decodedMessage += lowerAlphabet[decodedIndex];
    }
    //Verificar si el caracter es una letra mayuscula
    else if(upperAlphabet.includes(char)){
      //Encontrar la posicion original de la letra y aplicar el desplazamiento
      let decodedIndex = (upperAlphabet.indexOf(char) - shift + 26) % 26;
      decodedMessage += upperAlphabet[decodedIndex];
    }
    //Si no es una letra, se añade tal cual
    else{
      decodedMessage += char;
    }
  }

  return decodedMessage;
}

console.log(decode("Khoor Zruog!", 3)); // "Hello World!"
console.log(decode("Ebiil Tloia!", -3)); // "Hello World!"
console.log(decode("Uifsf jt b tfdsfu!", 1)); // "There is a secret!"
console.log(decode("Ymj vznhp gwtbs ktc ozruji tajw ymj qfed itl.", 5)); // "The quick brown fox jumps over the lazy dog."