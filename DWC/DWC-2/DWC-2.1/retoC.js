"use strict";

//Reto C - Números

//Declaro todas las variables que voy a utilizar
var numUnoUsuario, numUno, numDosUsuario, numDos;

//Pido al usuario que introduzca dos números
console.log("Introduce dos números enteros por teclado: ");
numUnoUsuario = prompt("Introduce el primer número: ");
numDosUsuario = prompt("Introduce el segundo número: ");

/**
 * Convierto los datos introducidos por usuario de 
 * tipo string a tipo number
 */
numUno = parseInt(numUnoUsuario);
numDos = parseInt(numDosUsuario);

//Muestro por pantalla el resultado
for (let i = 0; i < numUno; i++) {
  console.log(numDos);
  numDos = numDos * 2;
}