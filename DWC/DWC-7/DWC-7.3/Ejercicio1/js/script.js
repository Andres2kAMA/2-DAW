"use strict";

//Ejercicio 1 - Explotando una API con Fetch

import * as plantilaHTML from "./plantillaHTML.js";

window.onload = function () {
  var chuckNorris = new Request("https://api.chucknorris.io/jokes/random");

  fetch(chuckNorris)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      plantilaHTML.anyadirElemento("h1", "API de Chuck Norris", "body");
      plantilaHTML.anyadirElemento("button", "Generar frase aleatoria", "body");
    })
    .catch(function (err) {
      console.log(err);
    });
};
