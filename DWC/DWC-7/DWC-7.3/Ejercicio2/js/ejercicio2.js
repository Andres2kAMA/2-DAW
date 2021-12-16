"use strict";

/**
 * IMPORTS
 */
import * as swApi from "./sw.js";

window.onload = () => {
  fetch("https://swapi.py4e.com/api/films")
    .then((Response) => Response.json())
    .then((datos) => {
      swApi.mostrarPeliculas(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
};
