"use strict";

//Reto C - Sumando vectores

/**
 *
 * @returns Devuelvo un array de tamaño 100
 */
function declararArray() {
  let variable;
  return (variable = new Array(100));
}

/**
 *
 * @param {Function} funcionDeclararArray Función que devolverá un array de tamaño 100
 * @returns Devuelvo el array rellenado con números aleatorios
 */
function rellenarArrayNumerosAleatorios(funcionDeclararArray) {
  let arrayARellenar = funcionDeclararArray();
  for (let i = 0; i < arrayARellenar.length; i++) {
    arrayARellenar[i] = Math.floor(Math.random() * 101);
  }
  return arrayARellenar;
}

/**
 *
 * @param {Array} arrayNumUno
 * @param {Array} arrayNumDos
 * @returns Devuelvo un array con los datos de los arrays introducidos por parámetro.Este dato será el resultado de la suma del primer elemento del
 * arrayNumUno con el último elemento del arrayNumDos,etc.
 *
 */
function sumarArrays(arrayNumUno, arrayNumDos) {
  let arrayNumTres = new Array(100);
  let contador = 99;
  for (let i = 0; i < arrayNumUno.length; i++) {
    arrayNumTres[i] = arrayNumUno[i] + arrayNumDos[contador];
    contador--;
  }
  return arrayNumTres;
}

/**
 *
 * @param {Array} arrayParaImprimir
 * @param {int} numeroArray
 */
function imprimirArray(arrayParaImprimir, numeroArray) {
  console.log(`Array ${numeroArray}`);

  /**
   * Para que se imprima el array bien formateado, concateno en un console.log, los 10 primeros números separados por guines.
   * Después a la variable 'i', en vez de aumentarle en uno su valor, lo aumento en 10.
   */
  for (let i = 0; i < 100; i += 10) {
    console.log(
      `${arrayParaImprimir[i]} - ${arrayParaImprimir[i + 1]} - ${
        arrayParaImprimir[i + 2]
      } - ${arrayParaImprimir[i + 3]} - ${arrayParaImprimir[i + 4]} - ${
        arrayParaImprimir[i + 5]
      } - ${arrayParaImprimir[i + 6]} - ${arrayParaImprimir[i + 7]} - ${
        arrayParaImprimir[i + 8]
      } - ${arrayParaImprimir[i + 9]}`
    );
  }
  console.log(" ");
}

/**
 *
 * @param {Function} declararArray
 * @param {Function} rellenarArrayNumerosAleatorios
 * @param {Function} sumarArrays
 * @param {Function} imprimirArray
 */
function calcular(
  declararArray,
  rellenarArrayNumerosAleatorios,
  sumarArrays,
  imprimirArray
) {
  //Declaro las tres variables
  let arrayUno, arrayDos, arrayTres;

  //Relleno los dos primeros arrays con números aleatorios
  arrayUno = rellenarArrayNumerosAleatorios(declararArray);
  arrayDos = rellenarArrayNumerosAleatorios(declararArray);

  //Declaro que la variable 'arrayTres' es un Array
  arrayTres = declararArray();

  //Relleno 'arrayTres' con la suma de los dos primeros arrays
  arrayTres = sumarArrays(arrayUno, arrayDos);

  //Imprimo los arrays
  imprimirArray(arrayUno, 1);
  imprimirArray(arrayDos, 2);
  imprimirArray(arrayTres, 3);
}

calcular(
  declararArray,
  rellenarArrayNumerosAleatorios,
  sumarArrays,
  imprimirArray
);
