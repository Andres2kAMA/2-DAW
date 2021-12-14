"use strict";

//Ejercicio 1 - Explotando una API con Fetch

import * as plantilaHTML from "./plantillaHTML.js";
import * as chuckNorrisApi from "./chuckNorris.js";

window.onload = function () {
  plantilaHTML.anyadirElemento("h1", "API de Chuck Norris", "titulo", "body");

  plantilaHTML.anyadirElemento(
    "button",
    "Generar frase aleatoria",
    "boton",
    "body"
  );

  chuckNorrisApi.anyadirEventoBoton("boton");
};
