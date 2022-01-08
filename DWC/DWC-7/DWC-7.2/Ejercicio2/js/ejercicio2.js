"use strict";

/**
 * IMPORTS
 */
import * as swApi from "./sw.js";

window.onload = () => {
  const promesaSW = swApi.conectarmeConLaApi(
    "https://swapi.py4e.com/api/films"
  );

  promesaSW
    .then((promesaSW) => {
      swApi.mostrarPeliculas(promesaSW);
    })
    .catch((error) => {
      console.log("s");
    });
};
