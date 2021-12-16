"use strict";

/**
 * IMPORTS
 */
import * as plantillasSW from "./plantillaSW.js";

window.onload = () => {
  fetch("https://swapi.py4e.com/api/films")
    .then((Response) => Response.json())
    .then((datos) => {
      plantillasSW.mostrarPeliculas(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
};
