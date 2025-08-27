//Daily Challenge: Aug 21, 2025: Mile Pace

/*
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.
*/

function milePace(miles, duration) {
  //Separar minutos y segundos del tiempo total
  const [minutes, seconds] = duration.split(":").map(Number);

  //Convertir todo a segundos
  const totalSeconds = (minutes * 60) + seconds;

  //Calcular el promedio de segundos por milla
  const avgSecondsPerMile = totalSeconds / miles;

  //Convertir el promedio a formato MM:SS
  const avgMinutes = Math.floor(avgSecondsPerMile / 60);
  const avgSeconds = Math.round(avgSecondsPerMile % 60);
  const formattedMinutes = String(avgMinutes).padStart(2, "0");
  const formattedSeconds = String(avgSeconds).padStart(2, "0");
  const formattedPace = `${formattedMinutes}:${formattedSeconds}`;

  return formattedPace;
}

console.log(milePace(3, "30:00")); // "10:00"
console.log(milePace(5, "42:15")); // "08:27
console.log(milePace(1, "07:30")); // "07:30"
console.log(milePace(10, "85:00")); // "08:30