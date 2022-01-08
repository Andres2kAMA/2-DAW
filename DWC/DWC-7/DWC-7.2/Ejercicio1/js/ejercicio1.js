"use strict";

//Importo la Api
import * as pokemonApi from "./pokemon.js";

window.onload = function () {
  /**
   * Añado un evento "click" para obtener el pokemon.
   * Una ez obtenido el pokemon, ejecutamos la promesa pokemon.
   */
  document.getElementById("enviar").addEventListener(
    "click",
    function () {
      let pokemonID = parseInt(document.getElementById("idPokemon").value);
      let promesaPokemon = pokemonApi.obtenerPokemon(pokemonID);
      ejecutarPromesaPokemon(promesaPokemon);
    },
    false
  );

  /**
   * Cuando tenga el pokémon, muestros sus datos.
   * Si ha habido algún error, muestro el error.
   * @param {Promise} promesaPokemon
   */
  function ejecutarPromesaPokemon(promesaPokemon) {
    promesaPokemon
      .then((pokemon) => {
        pokemonApi.mostrarDatos(pokemon);
      })
      .catch((error) => {
        pokemonApi.mostrarError(error.message);
      });
  }
};
