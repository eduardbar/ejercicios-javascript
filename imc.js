/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
 */
function bmi(peso, altura) {
    const bmi = peso / (altura **2);
  
    if (bmi < 18.5) {
      return "Bro come un poquito más";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Ta bien";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Tas gordito pero nada preocupante";
    } else {
      return "Tas GORDO, midete we";
    }
  } 

  console.log(bmi(65, 1.8))