"use strict";

/**
 * IMPORTS
 */
import * as sw from "./sw.js";

window.onload = () => {
  /**
   * Me conecto con la API de starwars mediante un fetch.
   * Cuando reciba los datos, muestro todas las películas de StarWars.
   */
  fetch("https://swapi.py4e.com/api/films")
    .then((Response) => Response.json())
    .then((datos) => {
      sw.mostrarPeliculas(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
};
