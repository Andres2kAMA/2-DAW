"use strict";

//Reto A - Estás gordo

//Declaro todas las variables que voy a utilizar a lo largo del programa
let masaMarcos,
  alturaMarcos,
  masaJuan,
  alturaJuan,
  imcMarcos,
  imcJuan,
  comprobarMayorImc;

//Inicializo tanto la masa como la altura de Marcos y Juan
masaMarcos = 87;
alturaMarcos = 167;

masaJuan = 93;
alturaJuan = 205;

//Calculo el IMC y lo guardo en una variable
imcMarcos = calcularImc(masaMarcos, alturaMarcos);
imcJuan = calcularImc(masaJuan, alturaJuan);

//Compruebo si Marcos tiene un IMC mayor que Juan. En caso de ser cierto, devuelvo true
comprobarMayorImc = compararImc(imcMarcos, imcJuan);

//Muestro si Marcos tiene un IMC mayor que Juan por pantalla
mostrarResultado(comprobarMayorImc);

/**
 *
 * @param {int} masa
 * @param {int} altura
 * @returns
 */
function calcularImc(masa, altura) {
  return masa / (altura * altura);
}

/**
 *
 * @param {int} imcUno
 * @param {int} imcDos
 * @returns
 */
function compararImc(imcUno, imcDos) {
  if (imcUno > imcDos) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param {boolean} comprobarImc
 */
function mostrarResultado(comprobarImc) {
  console.log("¿Tiene Marcos un IMC mayor que el de Juan?: " + comprobarImc);
}
