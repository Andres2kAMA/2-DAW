"use strict";

//Reto A - Sumando

/**
 *
 * @returns Si se introducen menos de dos datos, se devolverá un error.
 * @returns Si se introduce algún dato no numérico, se devolverá un error.
 * @returns Si se introducen todos los datos correctamente, se devolverá la suma con todos los datos introducidos.
 */
function sumar() {
  //Almacenará la suma de todos los datos introducidos
  let numerosSumados = 0;
  if (arguments.length >= 2) {
    for (let i = 0; i < arguments.length; i++) {
      if (isNaN(arguments[i])) {
        return "Todos los datos deben ser numéricos.";
      } else {
        numerosSumados += arguments[i];
      }
    }
  } else {
    return "Debes introducir mínimos dos datos numéricos.";
  }
  return `La suma total de los números introducidos es ${numerosSumados}.`;
}

//Llamo a la función sumar
console.log(sumar(2, 4, 6));
