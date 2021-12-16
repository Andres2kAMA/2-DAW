import * as plantillasSW from "./plantillaSW.js";

var personajes = new Array();
var datosPersonajes = new Array();

function mostrarPersonajesPelicula() {
  plantillasSW.mostrarPersonajesPelicula(personajes, datosPersonajes);
  personajes = new Array();
}

function enviarPeticionPersonajes(personajes) {
  for (let i = 0; i < 10; i++) {
    obtenerPersonaje(personajes[i]);
  }
}

function almacenarPersonajes(personaje) {
  personajes.push(personaje);

  if (personajes.length == 10) {
    mostrarPersonajesPelicula(personajes, datosPersonajes);
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
export { enviarPeticionPersonajes };
