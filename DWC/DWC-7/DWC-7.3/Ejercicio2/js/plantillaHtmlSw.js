import * as sw from "./sw.js";

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
  let body = document.getElementById(dondeAnyadir);

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

  body.appendChild(cabecera);
  body.appendChild(ul);
  body.appendChild(nav);
}

export { anyadirPeliculasHTML };
