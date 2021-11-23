"use strict";

//Reto B - Multiplicando

/**
 *
 * @param {double} numero
 * @param {Function} funcion
 */
function tablas(numero, funcion) {
  if (isNaN(numero) || numero < 2) {
    console.log("Debes introducir un dato numérico positivo mayor a 2");
  } else {
    for (let i = numero; i >= 2; i--) {
      funcion(i);
    }
  }
}

/**
 *
 * @param {double} numero
 */
function multiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}`);
  for (let i = 0; i <= 10; i++) {
    /**
     * Al poner el '.toFixed(2), me aseguro a que si el usuario
     * introduce un número decimal, lo que se imprima por pantalla
     * tenga el mismo formato para todos los números.
     */
    console.log(`${numero} x ${i} = ${(numero * i).toFixed(2)}`);
  }
  console.log(" ");
}

//Llamo a la función tablas
tablas(1, multiplicar);
