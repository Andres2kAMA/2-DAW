"use strict";

//Ejercicio 3 - Localizador

window.onload = function () {
  //Me almaceno las etiquetas 'h3' del html en dos variables
  var x = document.getElementById("x");
  var y = document.getElementById("y");

  /**
   * Esta función cambiará dinámicamente las etiquetas 'h3' con
   * las coordenadas X e Y respectivamente.
   * @param {Object} ev
   */
  function modificarCoordenadas(ev) {
    x.innerHTML = "X: " + ev.clientX;
    y.innerHTML = "Y: " + ev.clientY;
  }

  //Creo un evento en todo el documento que se ejecutará el mover el ratón
  document.addEventListener(
    "mousemove",
    function (ev) {
      modificarCoordenadas(ev);
    },
    false
  );
};
