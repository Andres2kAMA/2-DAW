"use strict";

//Ejercicio 2 - Colorines

window.onload = function () {
  //Me creo un array con todos los posibles valores hexadecimales
  var letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  /**
   *
   * @returns Devuelve una string que representa un color hexadecimal
   */
  function generarColorHexadecimal() {
    let numeroHexadecimal = "#";
    for (let i = 0; i < 6; i++) {
      let numeroAleatorio = Math.floor(Math.random() * 16);
      numeroHexadecimal += letras[numeroAleatorio];
    }
    console.log(numeroHexadecimal);
    return numeroHexadecimal;
  }

  /**
   * Creo un evento para todo el documento en el que se cambiará el fondo de color siempre
   * que no se clique en ningún elemento del header.
   */
  document.addEventListener(
    "dblclick",
    function (ev) {
      if (ev.target.className != "noColoreable") {
        ev.target.style = "background-color:" + generarColorHexadecimal();
      }
    },
    false
  );
};
