"use strict";

/**
 * IMPORTS
 */
import * as sw from "./sw.js";

window.onload = () => {
  fetch("https://swapi.py4e.com/api/films")
    .then((Response) => Response.json())
    .then((datos) => {
      sw.mostrarPeliculas(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
};
