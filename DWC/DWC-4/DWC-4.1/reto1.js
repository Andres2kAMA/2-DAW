"use strict";

//Ejercicio 1 - Contando elementos del DOM

var datosAnyadir = Array();
var parrafoAMostrar = document.createElement("p");
//El nº de párrafos

/**
 * Me almaceno en la variable 'parrafos', todos los párrafos del html.
 * Entonces, al ser la variable un ARRAY, muestro la longitud de este,
 * que será el Nº de párrafos.
 */
var parrafos = document.getElementsByTagName("p");

datosAnyadir.push(`El número de párrafos es: ${parrafos.length}`);

//El texto del segundo párrafo

/**
 * Como queremos mostrar el contenido del segundo párrafo, lo único que hago
 * es seleccionar la segunda posición del ARRAY 'párrafos' y le añado un 'textContent'
 * para que se muestre el contenido.
 */
datosAnyadir.push(
  `El texto del segundo párrafo es: "${parrafos[1].textContent}"`
);

//El nº de enlaces de la página

var enlaces = document.getElementsByTagName("a");

datosAnyadir.push(`El número de enlaces es: ${enlaces.length}`);

//La dirección del primer enlace
datosAnyadir.push(
  `La dirección del primer enlace es: ${enlaces[0].textContent}`
);

//La dirección del penúltimo enlace

/**
 * Se restan dos posiciones para acceder a la penúltima posición del array, ya que el enlaces.length
 * cuenta las posiciones de la [ 1 - nº elementos ], sin embargo, los posiciones del array van
 * de la [0 - nº elementos -1]. Por tanto, para acceder a la penúltima posición, tengo que restar
 * 2 números al 'enlaces.length'.
 */
datosAnyadir.push(
  `La dirección del primer penúltimo es: ${
    enlaces[enlaces.length - 2].textContent
  }`
);

//Añado los datos al HTML

var parrafoPadre = document.getElementById("info");

for (let i = 0; i < datosAnyadir.length; i++) {
  parrafoPadre.append(`${i + 1}-> ${datosAnyadir[i]}`);
  parrafoPadre.innerHTML += "<br>";
}
