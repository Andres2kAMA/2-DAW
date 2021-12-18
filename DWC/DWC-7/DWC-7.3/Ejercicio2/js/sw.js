import * as plantillaHTML from "./plantillaHtmlSw.js";

var personajes = new Array();
var datosPersonajes = new Array();

function obtenerDatosPersonajes() {
  return datosPersonajes;
}

function anyadirVehiculosPersonajes(datos, posicionArray, tipoVehiculo) {
  datosPersonajes[posicionArray][tipoVehiculo].push(datos);
}

function anyadirDatosPersonajes(datos, posicionArray) {
  datosPersonajes[posicionArray] = new Array();
  datosPersonajes[posicionArray][0] = new Array();
  datosPersonajes[posicionArray][0].push(datos);
}

function obtenerVehiculosPersonajes(url, posicionArray) {
  if (url.length != 0) {
    for (let i = 0; i < url.length; i++) {
      fetch(url[i])
        .then((Response) => Response.json())
        .then((vehiculos) => {
          if (i == 0) {
            datosPersonajes[posicionArray][2] = new Array();
          }
          anyadirVehiculosPersonajes(vehiculos, posicionArray, 2);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
}

function obtenerNavesPersonajes(url, personaje, posicionArray) {
  console.log(personaje);
  anyadirDatosPersonajes(personaje, posicionArray);
  obtenerVehiculosPersonajes(personaje.vehicles, posicionArray);
  if (url.length != 0) {
    for (let i = 0; i < url.length; i++) {
      fetch(url[i])
        .then((Response) => Response.json())
        .then((naves) => {
          if (i == 0) {
            datosPersonajes[posicionArray][1] = new Array();
          }
          anyadirVehiculosPersonajes(naves, posicionArray, 1);
        })
        .catch(function (err) {
          console.log(err.message);
        });
    }
  } else {
    obtenerVehiculosPersonajes(personaje.vehicles, posicionArray);
  }
}

/**
 * Llamo a una función que mostrará los personajes por pantalla y vaciará el array.
 */
function mostrarPersonajesPelicula() {
  plantillaHTML.anyadirPersonajesHTML(personajes);
  personajes = new Array();
}

/**
 *
 * @param {Object} personaje
 */
function almacenarPersonajes(personaje) {
  //Añado al array el personaje
  personajes.push(personaje);

  //Cuando estén almacenados los 10 personajes los muestro
  if (personajes.length == 10) {
    mostrarPersonajesPelicula();
  }
}

/**
 * Mediante una promesa fetch llamo al servidor para obtener los personajes
 * @param {String} url
 */
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
 * Envío una peticion para obtener los personajes de la película
 * @param {Array} personajes
 */
function enviarPeticionPersonajes(personajes) {
  for (let i = 0; i < 10; i++) {
    obtenerPersonaje(personajes[i]);
  }
}

/**
 * Muestro información sobre la película seleccionada
 * @param {Object} pelicula
 */
function mostrarInformacionPelicula(pelicula) {
  plantillaHTML.anyadirEtiquetaPersonalizada("h2", "Sinopsis", "sinopsis");
  plantillaHTML.anyadirEtiquetaPersonalizada("h3", pelicula.title, "titulo");
  plantillaHTML.anyadirEtiquetaPersonalizada(
    "p",
    pelicula.opening_crawl,
    "textoSinopsis"
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

export {
  mostrarPeliculas,
  mostrarInformacionPelicula,
  obtenerNavesPersonajes,
  obtenerVehiculosPersonajes,
  obtenerDatosPersonajes,
};
