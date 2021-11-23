"use strict";

//Ejercicio 4 - Papelera de reciclaje

window.onload = function () {
  //Selecciono el div donde se encuentran las imágenes
  var divImg = document.getElementsByTagName("div")[0];

  /**
   *
   * @returns Devuelve la imagen de la papelera llena
   */
  function devolverPapeleraLlena() {
    let papeleraLlena = document.createElement("img");
    papeleraLlena.src = "img/papeleraLlena.png";
    papeleraLlena.alt = "Papelera llena";
    return papeleraLlena;
  }

  //Creo una variable donde voy a almacenar el elemento arrastrado
  var elementoArrastrado;

  /**
   * Defino un evento que almacenará en la variable definida anteriormente
   * la bola de papel.
   */
  document.getElementById("bolaPapel").addEventListener(
    "dragstart",
    function (ev) {
      elementoArrastrado = ev.target;
    },
    false
  );

  /**
   * Creo un evento en el que se permita a la bola de papel pasar por cualquier objeto
   */
  document.addEventListener(
    "dragover",
    function (ev) {
      ev.preventDefault();
    },
    false
  );

  /**
   * Creo un evento que al dejar caer la bola de papel en la papelera:
   *    ->Elimina la bola de papel
   *    ->Elimina la papelera vacía
   *    ->Inserta la papelera llena
   */
  document.addEventListener(
    "drop",
    function (ev) {
      ev.preventDefault();

      if (ev.target.id == "papeleraVacia") {
        divImg.removeChild(elementoArrastrado);
        divImg.removeChild(ev.target);
        divImg.appendChild(devolverPapeleraLlena());
      }
    },
    false
  );
};
