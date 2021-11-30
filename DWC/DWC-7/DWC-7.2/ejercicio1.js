"use strict";

import * as pokemonApi from "./pokemon.js";

window.onload = function () {
  document.getElementById("enviar").addEventListener(
    "click",
    function () {
      let pokemonID = parseInt(document.getElementById("idPokemon").value);
      let promesaPokemon = pokemonApi.obtenerPokemon(pokemonID);
      ejecutarPromesaPokemon(promesaPokemon);
    },
    false
  );

  function ejecutarPromesaPokemon(promesaPokemon) {
    promesaPokemon
      .then((pokemon) => {
        console.log(pokemon);
        pokemonApi.mostrarDatos(pokemon);
      })
      .catch((error) => {
        pokemonApi.mostrarError(error.message);
      });
  }
};
