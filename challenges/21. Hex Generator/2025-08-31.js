//Daily Challenge: Aug 31, 2025: Hex Generator

/*
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"


*/

function generateHex(color) {
  //Validar el color
  if(!["red", "green", "blue"].includes(color)){
    return "Invalid color";
  }

  //Función para generar un valor hexadecimal aleatorio entre 00 y FF
  let hex = () => {
    let hex = Math.floor(Math.random() * 256).toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  //Generar el color dominante
  if(color === "red"){
    color = "FF" + hex() + hex();
  } 

  else if(color === "green"){
    color = hex() + "FF" + hex();
  }

  else if(color === "blue"){
    color = hex() + hex() + "FF";
  }
  
  //Retornar el color generado
  return color;
}

console.log(generateHex("red")); // "FF3A1C"
console.log(generateHex("green")); // "4BFF9E"
console.log(generateHex("blue")); // "1C3AFF"
console.log(generateHex("yellow")); // "Invalid color"