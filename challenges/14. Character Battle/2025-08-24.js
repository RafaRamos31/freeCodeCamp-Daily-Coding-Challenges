//Daily Challenge: Aug 24, 2025: Character Battle

/*
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/

function battle(myArmy, opposingArmy) {
  //Se comprueba si ambos strings tienen el mismo numero de caracteres
  if(myArmy.length > opposingArmy.length){
    return "Opponent retreated"
  }

  if(myArmy.length < opposingArmy.length){
    return "We retreated"
  }

  //Se definen constantes para los posibles valores de los caracteres
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  //Se definen los contadores para las victorias en cada enfrentamiento
  let myVictories = 0;
  let opposingVictories = 0;

  //Se descompone los strings a arreglos para comparar las parejas de caracteres
  const myArray = myArmy.split("");
  const opposingArray = opposingArmy.split("");

  //Se compara cada pareja de caracteres
  for(let i=0; i<myArmy.length; i++){
    //Inicializar variables que guardaran la fuerza de cada caracter
    let myValue = 0;
    let opposingValue = 0;

    //Encontrar valor del caracter del ejercito aliado
    if(letters.includes(myArray[i])){
      myValue = letters.indexOf(myArray[i]) + 1;
    }

    if(numbers.includes(myArray[i])){
      myValue = numbers.indexOf(myArray[i]);
    }

    //Encontrar valor del caracter del ejercito enemigo
    if(letters.includes(opposingArray[i])){
      opposingValue = letters.indexOf(opposingArray[i]) + 1;
    }

    if(numbers.includes(opposingArray[i])){
      opposingValue = numbers.indexOf(opposingArray[i]);
    }

    //Comparar ambos valores y determinar el ganador de la ronda
    if(myValue > opposingValue){
      myVictories = myVictories + 1;
    }

    if(myValue < opposingValue){
      opposingVictories = opposingVictories + 1;
    }
  }

  //Determinar el ganador en base al total de victorias
  if(myVictories > opposingVictories){
    return "We won";
  }

  if(myVictories < opposingVictories){
    return "We lost";
  }

  return "It was a tie";
}

console.log(battle("aB3", "bA2")); // "We won"
console.log(battle("abc", "ab")); // "Opponent retreated"
console.log(battle("ab", "abc")); // "We retreated"
console.log(battle("a1c", "A2C")); // "We lost"