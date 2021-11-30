"use strict";

function crearEncabezados(encabezados) {
  let div = document.getElementById("mostrarDatos");
  for (let i = 0; i < encabezados.length; i++) {
    let h2 = document.createElement("h2");
    h2.innerHTML = encabezados[i];
    h2.id = encabezados[i];
    div.appendChild(h2);
  }
}

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

function eliminarElementosDiv(div) {
  while (div.hasChildNodes == true) {
    div.removeChild(div.children[0]);
  }
}

function mostrarError(mensajeError) {
  let div = document.getElementById("mostrarDatos");
  if (div.hasChildNodes) {
    eliminarElementosDiv(div);
    let p = document.createElement("p");
    p.id = "error";
    p.innerHTML = mensajeError;
    div.insertAdjacentElement("beforebegin", p);
  }
}
function eliminarError() {
  if (document.getElementById("error") != null) {
    document
      .getElementById("error")
      .parentNode.removeChild(document.getElementById("error"));
  }
}

function mostrarDatos(pokemon) {
  eliminarError();
  let encabezados = ["Nombre", "Imagen", "ID", "Peso"];
  if (document.getElementById("Nombre") == null) crearEncabezados(encabezados);
  mostrarDatoIndividual(pokemon.name.toUpperCase(), encabezados[0]);
  mostrarDatoIndividual(pokemon.id, encabezados[2]);
  mostrarDatoIndividual(pokemon.weight, encabezados[3]);
  mostrarImagen(pokemon.sprites.front_default);
}

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
