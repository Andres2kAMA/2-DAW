"use strict";

/**
 * Creo los encabezados del HTML.
 * @param {Array} encabezados
 */
function crearEncabezados(encabezados) {
  let div = document.getElementById("mostrarDatos");
  for (let i = 0; i < encabezados.length; i++) {
    let h2 = document.createElement("h2");
    h2.innerHTML = encabezados[i];
    h2.id = encabezados[i];
    div.appendChild(h2);
  }
}

/**
 * Añado la imagen del pokemon al HTML.
 * @param {String} rutaImg
 */
function mostrarImagen(rutaImg) {
  let encabezadoImg = document.getElementById("Imagen");
  if (document.getElementById("imagenPokemon") == null) {
    let img = new Image();
    img.src = rutaImg;
    img.id = "imagenPokemon";
    encabezadoImg.insertAdjacentElement("afterend", img);
    img.insertAdjacentElement("afterend", document.createElement("br"));
  } else {
    document.getElementById("imagenPokemon").src = rutaImg;
  }
}

/**
 * Muestro los datos del pokemon.
 * @param {String} dato
 * @param {String} idEncabezado
 */
function mostrarDatoIndividual(dato, idEncabezado) {
  let encabezado = document.getElementById(idEncabezado);
  if (document.getElementById(`${idEncabezado}Pokemon`) == null) {
    let p = document.createElement("p");
    p.innerHTML = dato;
    p.id = `${idEncabezado}Pokemon`;
    encabezado.insertAdjacentElement("afterend", p);
    p.insertAdjacentElement("afterend", document.createElement("br"));
  } else {
    document.getElementById(`${idEncabezado}Pokemon`).innerHTML = dato;
  }
}

/**
 * Elimino toda la información del pokémon.
 * @param {Div} div
 */
function eliminarElementosDiv(div) {
  while (div.hasChildNodes() == true) {
    div.removeChild(div.children[0]);
  }
}

/**
 * Muestro un mensaje de error personalizado.
 * @param {String} mensajeError
 */
function mostrarError(mensajeError) {
  let div = document.getElementById("mostrarDatos");
  if (document.getElementById("error") == null)
    if (div.hasChildNodes) {
      eliminarElementosDiv(div);
      let p = document.createElement("p");
      p.id = "error";
      p.innerHTML = mensajeError;
      div.insertAdjacentElement("beforebegin", p);
    }
}

/**
 * Quito el error.
 */
function eliminarError() {
  if (document.getElementById("error") != null) {
    document
      .getElementById("error")
      .parentNode.removeChild(document.getElementById("error"));
  }
}

/**
 * ***FUNCIÓN PRINCIPAL***
 * @param {Object} pokemon
 */
function mostrarDatos(pokemon) {
  eliminarError();
  let encabezados = ["Nombre", "Imagen", "ID", "Peso"];
  if (document.getElementById("Nombre") == null) crearEncabezados(encabezados);
  mostrarDatoIndividual(pokemon.name.toUpperCase(), encabezados[0]);
  mostrarImagen(pokemon.sprites.front_default);
  mostrarDatoIndividual(pokemon.id, encabezados[2]);
  mostrarDatoIndividual(pokemon.weight, encabezados[3]);
}

/**
 *
 * @param {String} pokemonID
 * @returns Devuelvo una promesa con el pokemon seleccionado.
 */
function obtenerPokemon(pokemonID) {
  return new Promise((resolver, rechazar) => {
    if (pokemonID != NaN && pokemonID > 0 && pokemonID <= 898) {
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

export { obtenerPokemon, mostrarDatos, mostrarError };
