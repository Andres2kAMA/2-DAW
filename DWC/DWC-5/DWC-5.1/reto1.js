"use strict";

//Ejercicio 1 - Saludar

//Cuando se cargue toda la ventana empezaré el funcionamiento del programa
window.onload = function () {
  var idIntervalo;

  function empezarIntervalo() {
    //Almaceno el body
    let body = document.getElementsByTagName("body")[0];

    //Defino un intervalo que cada dos segundos va a crear y mostrar un
    //h1 con el texto '¡Hola Feo!'.
    var pararIntervalo = setInterval(() => {
      let h1 = document.createElement("h1");
      h1.innerHTML = "¡Hola Feo!";
      body.appendChild(h1);
    }, 2000);

    //Almaceno en la variable global 'idIntervalo', el id del intervalo
    idIntervalo = pararIntervalo;
  }

  //Paro el funcionamiento del intervalo mediante un 'clearInterval'
  function pararIntervalo(idIntervalo) {
    clearInterval(idIntervalo);
  }

  /**
   * Añado dos eventos a los botones:
   *    ->El primero, comenzará el intervalo
   *    ->El segundo, acabará el intervalo
   */
  document.getElementById("comenzarSaludos").addEventListener(
    "click",
    function () {
      empezarIntervalo();
      document
        .getElementById("comenzarSaludos")
        .setAttribute("disabled", "true");
    },
    false
  );

  document.getElementById("pararSaludos").addEventListener(
    "click",
    function () {
      pararIntervalo(idIntervalo);
      document.getElementById("comenzarSaludos").removeAttribute("disabled");
    },
    false
  );
};
