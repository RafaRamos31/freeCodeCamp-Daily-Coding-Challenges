//Daily Challenge: Aug 29, 2025: Candlelight

/*
Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

Burn 7 candles to get 7 leftovers,
Recycle 6 leftovers into 3 new candles (1 leftover remains),
Burn 3 candles to get 3 more leftovers (4 total),
Recycle 4 leftovers into 2 new candles,
Burn 2 candles to get 2 leftovers,
Recycle 2 leftovers into 1 new candle,
Burn 1 candle.
You will have burned 13 total candles in the example.

*/

function burnCandles(candles, leftoversNeeded) {
  //Variable para el total de velas
  let total = 0;

  //Variables para el registro de velas y restos actuales
  let remaining = candles;
  let leftovers = 0;

  while(remaining > 0){
    //Se cuentan y queman las velas, luego pasan a restos
    total = total + remaining;
    leftovers = leftovers + remaining;
    remaining = 0;

    //Se crea nuevas velas
    remaining = Math.floor(leftovers / leftoversNeeded);

    //Se descuentan los restos usados
    leftovers = leftovers % leftoversNeeded;
  }
  return total;
}

console.log(burnCandles(7, 2)) // 13
console.log(burnCandles(10, 3)) // 14
console.log(burnCandles(5, 5)) // 6
console.log(burnCandles(1, 2)) // 1