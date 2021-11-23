"use strict";

//Reto E - Propinas

//Declaro las tres variables que voy a utilizar
var reciboRestaurantes, propinasRestaurantes, totalAPagar;

/**
 * Declaro que dichas variables van a ser arrays,
 * e inicializo el array 'reciboRestaurantes'
 */
reciboRestaurantes = new Array(124, 48, 268);
propinasRestaurantes = new Array();
totalAPagar = new Array();

/**
 * En este bucle, dependiendo del recibo, mediante if-else
 * inicializo el array 'propinasRestaurantes'.Finalmente,
 * calculo el total a pagar, teniendo en cuenta en recibo y la propina
 */
for (let i = 0; i < reciboRestaurantes.length; i++) {
  if (reciboRestaurantes[i] < 50) {
    propinasRestaurantes.push(20);
  } else if (reciboRestaurantes[i] >= 50 && reciboRestaurantes[i] <= 200) {
    propinasRestaurantes.push(15);
  } else {
    propinasRestaurantes.push(10);
  }

  totalAPagar[i] = calcularTotalAPagar(
    reciboRestaurantes[i],
    propinasRestaurantes[i]
  );
}

//Muestro por pantalla el total a pagar
mostrarTotalPagar(reciboRestaurantes, propinasRestaurantes, totalAPagar);

/**
 *
 * @param {int} precio
 * @param {int} propina
 * @returns
 */
function calcularTotalAPagar(precio, propina) {
  let propinaContandoPrecio = (precio * propina) / 100;
  return precio + propinaContandoPrecio;
}

/**
 *
 * @param {int[]} reciboRestaurantes
 * @param {int[]} propinasRestaurantes
 * @param {int[]} totalAPagar
 */
function mostrarTotalPagar(
  reciboRestaurantes,
  propinasRestaurantes,
  totalAPagar
) {
  for (let i = 0; i < reciboRestaurantes.length; i++) {
    console.log(
      "En el restaurante Nº " +
        (i + 1) +
        ", cuyo precio era " +
        reciboRestaurantes[i] +
        " euros, se va a dejar una propina del " +
        propinasRestaurantes[i] +
        "%, siendo el total a pagar " +
        totalAPagar[i] +
        " euros."
    );
  }
}
