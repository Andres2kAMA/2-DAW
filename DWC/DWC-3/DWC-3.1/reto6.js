"use strict";

//Ejercicio 6 - Números

/**
 *
 * @param {Array[]} numeros
 */
function mostrarNumeros(numeros) {
  let contador = 1;
  numeros.forEach((numero) => {
    console.log(`Nº${contador}: ${numero}`);
    contador++;
  });
}

/**
 *
 * @param {Int} numero
 * @returns Devuelvo 'true' si el número es primo
 */
function comprobarNumeroEsPrimo(numero) {
  //Si el número es menor que 2, automáticamente digo que es primo
  if (numero < 2) {
    return true;
  } else {
    for (let i = 2; i <= numero; i++) {
      /**
       * Si el módulo del número es 0 antes de que la i = numero
       * NO es primo
       */
      if (numero % i == 0 && i != numero) {
        return false;
      }
    }

    //Si ha llegado hasta aquí, es un número primo
    return true;
  }
}

/**
 *
 * @param {Int} numero
 * @returns Devuelvo 'true' si el número es palíndromo
 */
function comprobarNumeroEsPalindromo(numero) {
  let numeroEnString = numero.toString();
  let numeroEnStringAlReves = "";

  for (let i = numeroEnString.length - 1; i >= 0; i--) {
    numeroEnStringAlReves += numeroEnString[i];
  }

  for (let i = 0; i < numeroEnString.length; i++) {
    if (numeroEnString[i] != numeroEnStringAlReves[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Me guardo todos los números primos y palíndromos y los muestro
 */
function comprobarNumerosPrimosPalindromos() {
  let numerosPrimosPalindromos = new Array();
  for (let i = 0; i < 100000; i++) {
    if (comprobarNumeroEsPrimo(i) && comprobarNumeroEsPalindromo(i)) {
      numerosPrimosPalindromos.push(i);
    }
  }
  mostrarNumeros(numerosPrimosPalindromos);
}

//Llamo a la función
comprobarNumerosPrimosPalindromos();
