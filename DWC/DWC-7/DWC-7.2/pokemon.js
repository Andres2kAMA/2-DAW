"use strict";

function crearEncabezados(encabezados) {
  let body = document.getElementById("body");
  for (let i = 0; i < encabezados.length; i++) {
    let h2 = document.createElement("h2");
    h2.innerHTML = encabezados[i];
    h2.id = encabezados[i];
    body.appendChild(h2);
  }
}

function mostrarNombre(nombre) {
  let encabezadoNombre = document.getElementById("Nombre");
  if (document.getElementById("nombrePokemon") == null) {
    let p = document.createElement("p");
    p.innerHTML = nombre;
    p.id = "nombrePokemon";
    encabezadoNombre.insertAdjacentElement("afterend", p);
    p.insertAdjacentElement("afterend", document.createElement("br"));
  } else {
    document.getElementById("nombrePokemon").innerHTML = nombre;
  }
}

function mostrarImagen(ruta) {}

function mostrarDatos(pokemon) {
  let encabezados = ["Nombre", "Imágen", "ID", "Altura", "Peso"];
  if (document.getElementById("Nombre") == null) crearEncabezados(encabezados);
  mostrarNombre(pokemon.name.toUpperCase());
  mostrarImagen(pokemon.sprites.front_default);
  mostrarID(pokemon.id);
  mostrarAltura(pokemon.height);
  mostrarPeso(pokemon.weigth);
}

function obtenerPokemon(pokemonID) {
  return new Promise((resolver, rechazar) => {
    if (pokemonID != NaN && pokemonID > 0 && pokemonID <= 1118) {
      let httpRequest = new XMLHttpRequest();

      httpRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

      httpRequest.addEventListener(
        "readystatechange",
        () => {
          if (httpRequest.readyState == 3) {
          }

          if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            resolver(JSON.parse(httpRequest.response));
          }
        },
        true
      );
      httpRequest.send();
    } else {
      rechazar(new Error("Pokemon No Encontrado"));
    }
  });
}

export { obtenerPokemon, mostrarDatos };
