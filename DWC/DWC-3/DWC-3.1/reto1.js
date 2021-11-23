"use strict";

//Ejercicio 1 - toCani

/**
 *
 * @param {String} cadena
 * @returns Devuelvo la cadena separada, pero con la peculiaridad de que
 *          las 'C's las he convertido en 'K's.
 */
function separarCaracteresCadena(cadena) {
  let cadenaSeparada = "";

  for (let i = 0; i < cadena.length; i++) {
    if (cadena.substring(i, i + 1).toUpperCase() == "C") {
      cadenaSeparada += "k";
    } else {
      cadenaSeparada += cadena.substring(i, i + 1);
    }
  }
  return cadenaSeparada;
}

/**
 *
 * @param {String} cadena
 * @returns Devuelve la cadena con tres 'H's al final
 */
function traductorACani(cadena) {
  //Separo la cadena mediante una función
  let cadenaSeparada = separarCaracteresCadena(cadena);
  let cadenaCani = "";

  //Los índices pares los guardo en mayúscula y los impares en minúscula
  for (let i = 0; i < cadenaSeparada.length; i++) {
    if (i % 2 == 0) {
      cadenaCani += cadenaSeparada[i].toUpperCase();
    } else {
      cadenaCani += cadenaSeparada[i].toLowerCase();
    }
  }

  return cadenaCani + "HHH";
}

//Llamo a la función introduciéndole la cadena
console.log(traductorACani("una cadena cani es como esta"));
