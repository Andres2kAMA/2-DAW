"use strict";

import * as plantilaHTML from "./plantillaHTML.js";

function mostrarBromaChuckNorris(datos) {
  plantilaHTML.anyadirElemento("p", datos.value, "parrafo", "body");
}

function anyadirEventoBoton(id) {
  document.getElementById(id).addEventListener(
    "click",
    function () {
      conectarAPI("https://api.chucknorris.io/jokes/random");
    },
    false
  );
}

function conectarAPI(url) {
  fetch(url)
    .then((Response) => Response.json())
    .then((datos) => {
      mostrarBromaChuckNorris(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
}
export { conectarAPI, anyadirEventoBoton, mostrarBromaChuckNorris };
