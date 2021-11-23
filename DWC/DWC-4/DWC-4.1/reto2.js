"use strict";

//Ejercicio 2 - Números DOM

//Almaceno en dos variables tanto la lista como el botón
var lista = document.getElementById("lista");
var boton = document.getElementById("nuevoNumero");

//Creo un evento, que va a llamar a la función 'anyadirNumero()',
//al pulsar el botón
var numeroNuevo = boton.addEventListener("click", anyadirNumero, false);

/**
 * -> Creo un número aleatorio [0-100]
 * -> Creo un elemento 'li'
 * -> Añado al 'li', un nodo con el valor del número aleatorio
 * -> Añado el 'li' a la lista
 */
function anyadirNumero() {
  var numeroAleatorio = Math.floor(Math.random() * 100);
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(numeroAleatorio));
  lista.appendChild(li);
}
