//Daily Challenge: Sept 2, 2025: RGB to Hex

/*
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.

*/

function rgbToHex(rgb) {
  //Función para generar un valor hexadecimal en base a un valor decimal
  let hex = (num) => {
    let hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  //Extraer los valores de r, g y b del string
  let rgbValues = rgb.match(/\d+/g).map(Number);
  
  //Convertir los valores a hexadecimal
  rgb = "#" + hex(rgbValues[0]) + hex(rgbValues[1]) + hex(rgbValues[2]);

  //Retornar el valor en hexadecimal
  return rgb;
}

console.log(rgbToHex("rgb(255, 255, 255)")); // "#ffffff"
console.log(rgbToHex("rgb(1, 2, 3)")); // "#010203"
console.log(rgbToHex("rgb(255, 0, 0)")); // "#ff0000"
console.log(rgbToHex("rgb(0, 255, 0)")); // "#00ff00"

