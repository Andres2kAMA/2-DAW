import * as sw from "./sw.js";
let body = document.getElementById("body");

/**
 * Muestro la información de cada personaje
 * @param {int} posicionArray
 */
function mostrarInformacionPersonaje(posicionArray) {
  let datosPersonajes = sw.obtenerDatosPersonajes();
  console.log(datosPersonajes);
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

  nav.appendChild(ul);
  body.appendChild(nav);
}

/**
 * Añado al HTML 10 personajes de la película y les inserto un evento "click" para obtener información individual de cada personaje.
 * @param {Array} personajes
 */
function anyadirPersonajesHTML(personajes) {
  if (document.getElementById("tituloPersonajes") == null) {
    anyadirEtiquetaPersonalizada("h2", "Personajes", "tituloPersonajes");
  } else {
    body.removeChild(document.getElementById("personajes"));
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

    sw.obtenerNavesPersonajes(personajes[i].starships, personajes[i], i);
  }

  nav.appendChild(ul);
  body.appendChild(nav);
}

/**
 *
 * @param {String} etiquetaACrear
 * @param {String} texto
 * @param {String} id
 */
function anyadirEtiquetaPersonalizada(etiquetaACrear, texto, id) {
  if (document.getElementById(id) == null) {
    let etiqueta = document.createElement(etiquetaACrear);
    etiqueta.id = id;
    etiqueta.innerHTML = texto;
    body.appendChild(etiqueta);
  } else {
    document.getElementById(id).innerHTML = texto;
  }
}

/**
 *
 * @param {Object} pelicula
 * @param {String} nombreClase
 * @returns Devuelve un li con una clase y con un evento "click" a una función.
 */
function obtenerLiModificadoPeliculas(pelicula, nombreClase) {
  let li = document.createElement("li");
  li.className = nombreClase;
  li.addEventListener(
    "click",
    function () {
      sw.mostrarInformacionPelicula(pelicula);
    },
    false
  );
  return li;
}

/**
 *
 * @param {String} dondeAnyadir
 * @param {Array} etiquetasACrear
 * @param {String} textoCabecera
 * @param {String} idNav
 * @param {Array} peliculas
 */
function anyadirPeliculasHTML(
  dondeAnyadir,
  etiquetasACrear,
  textoCabecera,
  idNav,
  peliculas
) {
  let dondeAnyadirEtiqueta = document.getElementById(dondeAnyadir);

  let cabecera = document.createElement(etiquetasACrear[0]);
  let ul = document.createElement(etiquetasACrear[1]);
  let nav = document.createElement(etiquetasACrear[2]);

  cabecera.innerHTML = textoCabecera;

  nav.id = idNav;

  for (let i = 0; i < peliculas.count; i++) {
    let li = obtenerLiModificadoPeliculas(peliculas.results[i], "peliculas");
    li.innerHTML = `(${peliculas.results[i].episode_id}) ${peliculas.results[i].title}`;
    ul.appendChild(li);
  }

  dondeAnyadirEtiqueta.appendChild(cabecera);
  dondeAnyadirEtiqueta.appendChild(ul);
  dondeAnyadirEtiqueta.appendChild(nav);
}

export {
  anyadirPeliculasHTML,
  anyadirEtiquetaPersonalizada,
  anyadirPersonajesHTML,
};
