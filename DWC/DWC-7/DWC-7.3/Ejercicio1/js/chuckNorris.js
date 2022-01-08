"use strict";

import * as plantilaHTML from "./plantillaHTML.js";

/**
 * Añado la broma al HTML.
 * @param {Object} datos
 */
function mostrarBromaChuckNorris(datos) {
  plantilaHTML.anyadirElemento("p", datos.value, "parrafo", "body");
}

/**
 * Añado un evento "click" al botón que me permitirá conectarme con la API.
 * @param {String} id
 */
function anyadirEventoBoton(id) {
  document.getElementById(id).addEventListener(
    "click",
    function () {
      conectarAPI("https://api.chucknorris.io/jokes/random");
    },
    false
  );
}

/**
 * Me conecto con la API.
 * @param {String} url
 */
function conectarAPI(url) {
  fetch(url)
    .then((Response) => Response.json())
    .then((datos) => {
      //Cuando tenga los datos, muestro la broma.
      mostrarBromaChuckNorris(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
}
export { conectarAPI, anyadirEventoBoton, mostrarBromaChuckNorris };
