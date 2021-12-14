"use strict";

import * as plantilaHTML from "./plantillaHTML.js";

function mostrarBromaChuckNorris(datos) {
  plantilaHTML.anyadirElemento("p", datos.value, "parrafo", "body");
}

function anyadirEventoBoton(id, datos) {
  document.getElementById(id).addEventListener(
    "click",
    function () {
      return conectarAPI();
    },
    false
  );
}
function conectarAPI() {
  return new Request("https://api.chucknorris.io/jokes/random");
}
export { conectarAPI, anyadirEventoBoton };
