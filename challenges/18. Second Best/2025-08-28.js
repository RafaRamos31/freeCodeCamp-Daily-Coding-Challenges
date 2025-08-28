//Daily Challenge: Aug 27, 2025: Second Best
/*
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

*/

function getLaptopCost(laptops, budget) {
  //Ordenar precios en orden descendente y eliminar el más caro
  const sorted = laptops.sort((a, b) => b - a).slice(1);

  for(let i=0; i<sorted.length; i++){
    //Verificar si el precio está dentro del presupuesto
    if(sorted[i] < budget){
      return sorted[i];
    }
  }

  //Regresar 0 si no hay laptops dentro del presupuesto
  return 0;
}

console.log(getLaptopCost([300, 200, 400, 150, 600], 250)) // 200
console.log(getLaptopCost([300, 200, 400, 150, 600], 100)) // 0
console.log(getLaptopCost([300, 200, 400, 150, 450], 500)) // 400
console.log(getLaptopCost([300, 200, 500, 150, 600], 700)) // 500