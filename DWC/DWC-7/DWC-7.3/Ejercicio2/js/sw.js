import * as plantillaHTML from "./plantillaHtmlSw.js";

var personajes = new Array();
var datosPersonajes = new Array();

function mostrarInformacionPersonaje(posicionArray) {
  let body = document.getElementById("body");

  if (document.getElementById("datosPersonajes") == null) {
    anyadirEtiquetaPersonalizada(
      "h2",
      "Datos del personaje",
      "datosPersonajes"
    );
  } else {
    body.removeChild(document.getElementById("datosPersonaje"));
  }

  let nav = document.createElement("nav");
  nav.id = "datosPersonaje";

  let ul = document.createElement("ul");

  for (let i = posicionArray; i < posicionArray + 1; i++) {
    for (let j = 0; j < datosPersonajes[i].length; j++) {
      let li = document.createElement("li");

      li.innerHTML = datosPersonajes[i][j];
      li.className = "datosPersonaje";
      ul.appendChild(li);
    }
  }

  personajes = new Array();

  nav.appendChild(ul);
  body.appendChild(nav);
}

function anyadirEtiquetaPersonalizada(etiquetaUsuario, texto, id) {
  let body = document.getElementById("body");
  let etiqueta = document.createElement(etiquetaUsuario);
  etiqueta.innerHTML = texto;
  etiqueta.id = id;
  body.appendChild(etiqueta);
}

function mostrarPersonajesPelicula() {
  let body = document.getElementById("body");

  if (document.getElementById("cargandoPersonajes") != null) {
    body.removeChild(document.getElementById("cargandoPersonajes"));
  }

  if (document.getElementById("tituloPersonajes") == null) {
    anyadirEtiquetaPersonalizada("h2", "Personajes", "tituloPersonajes");
  }

  let nav = document.createElement("nav");
  nav.id = "personajes";

  let ul = document.createElement("ul");

  for (let i = 0; i < personajes.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = personajes[i].name;
    li.className = "personajes";
    li.addEventListener(
      "click",
      function () {
        mostrarInformacionPersonaje(i);
      },
      false
    );
    ul.appendChild(li);

    datosPersonajes.push(
      new Array(
        personajes[i].name,
        `${personajes[i].height} cm`,
        `${personajes[i].mass} kg`,
        personajes[i].eye_color
      )
    );
  }

  personajes = new Array();

  nav.appendChild(ul);
  body.appendChild(nav);
}

function enviarPeticionPersonajes(personajes) {
  for (let i = 0; i < 10; i++) {
    obtenerPersonaje(personajes[i]);
  }
}

function almacenarPersonajes(personaje) {
  personajes.push(personaje);

  if (personajes.length == 10) {
    mostrarPersonajesPelicula();
  }
}

function obtenerPersonaje(url) {
  fetch(url)
    .then((Response) => Response.json())
    .then((datos) => {
      almacenarPersonajes(datos);
    })
    .catch(function (err) {
      console.log(err);
    });
}

/**
 * HACIENTO ESTE MÉTODO
 * @param {Object} pelicula
 */
function mostrarInformacionPelicula(pelicula) {
  let body = document.getElementById("body");

  plantillaHTML.mostrarInformacionSinopsis("h2", "Sinopsis", "sinopsis", body);
  plantillaHTML.mostrarInformacionSinopsis(
    "h3",
    pelicula.title,
    "titulo",
    body
  );
  plantillaHTML.mostrarInformacionSinopsis(
    "p",
    pelicula.opening_crawl,
    "textoSinopsis",
    body
  );

  enviarPeticionPersonajes(pelicula.characters);
}

/**
 * Llamo a una función en 'plantillasHtmlSw' que mostrará el listado de películas.
 * @param {Array} listadoPeliculas
 */
function mostrarPeliculas(listadoPeliculas) {
  let etiquetas = ["h2", "ul", "nav"];
  plantillaHTML.anyadirPeliculasHTML(
    "body",
    etiquetas,
    `Películas - ${listadoPeliculas.count}`,
    "listadoPeliculas",
    listadoPeliculas
  );
}

export { mostrarPeliculas, mostrarInformacionPelicula };
