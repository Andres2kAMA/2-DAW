//Me creo un array donde almacenaré todos los personajes.
var personajes = new Array();

/**
 * Esta función la utilizaré pare añadir/actualizar el valor de la sinopsis.
 * @param {String} etiquetaACrear
 * @param {String} texto
 * @param {String} id
 * @param {body} body
 */
function mostrarInformacionSinopsis(etiquetaACrear, texto, id, body) {
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
 * Esta función la utilizaré para mostrar los personajes
 */
function mostrarPersonajesPelicula() {
  let body = document.getElementById("body");
  if (document.getElementById("cargandoPersonajes") != null) {
    body.removeChild(document.getElementById("cargandoPersonajes"));
  }

  if (document.getElementById("tituloPersonajes") == null) {
    let h2 = document.createElement("h2");
    h2.innerHTML = "Personajes";
    h2.id = "tituloPersonajes";
    body.appendChild(h2);
  }

  let nav = document.createElement("nav");
  nav.id = "personajes";
  let ul = document.createElement("ul");
  for (let i = 0; i < personajes.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = personajes[i];
    ul.appendChild(li);
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
  personajes.push(personaje.name);

  if (personajes.length == 10) {
    mostrarPersonajesPelicula();
  }
}

function mostrarInformacionPelicula(pelicula) {
  let body = document.getElementById("body");

  mostrarInformacionSinopsis("h2", "Sinopsis", "sinopsis", body);
  mostrarInformacionSinopsis("h3", pelicula.title, "titulo", body);
  mostrarInformacionSinopsis(
    "p",
    pelicula.opening_crawl,
    "textoSinopsis",
    body
  );

  enviarPeticionPersonajes(pelicula.characters);
}

function obtenerEnlaceModificado(pelicula) {
  let a = document.createElement("a");
  a.className = "peliculas";
  a.addEventListener(
    "click",
    function () {
      mostrarInformacionPelicula(pelicula);
    },
    false
  );
  return a;
}

function mostrarPeliculas(listadoPeliculas) {
  let body = document.getElementById("body");
  let h2 = document.createElement("h2");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  if (document.getElementById("cargandoPeliculas") != null) {
    body.removeChild(document.getElementById("cargandoPeliculas"));
  }

  h2.innerHTML = `Películas - ${listadoPeliculas.count}`;
  body.appendChild(h2);

  nav.id = "listadoPeliculas";

  for (let i = 0; i < listadoPeliculas.count; i++) {
    let li = document.createElement("li");
    let a = obtenerEnlaceModificado(listadoPeliculas.results[i]);
    a.innerHTML = `(${listadoPeliculas.results[i].episode_id}) ${listadoPeliculas.results[i].title}`;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  body.appendChild(nav);
}

function conectarmeConLaApi(url) {
  //Dirección URL de la API de star wars.
  //Creo el objeto httpRequest.
  let httpRequest = new XMLHttpRequest();

  /**
   * Abro la conexión con el método open, añadiéndole los siguientes parámetros:
   *      ->El tipo de envío (GET/POST)
   *      ->La url a donde dirigirme
   *      ->El tipo de sincronismo:
   *          ->true = ASINCRONISMO
   *          ->false = SINCRONISMO
   */
  httpRequest.open("GET", url);

  httpRequest.addEventListener(
    "readystatechange",
    () => {
      // Si está recibiendo datos.
      if (httpRequest.readyState == 3) {
        if (document.getElementById("listadoPeliculas") == null) {
          let body = document.getElementById("body");
          let p = document.createElement("p");
          p.innerHTML = "Cargando...";
          p.id = "cargandoPeliculas";
          body.appendChild(p);
        }
      }

      // Si la comunicación ha sido correcta.
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        mostrarPeliculas(JSON.parse(httpRequest.response));
      }
    },
    true
  );
  return httpRequest;
}

function obtenerPersonaje(url) {
  //Dirección URL de la API de star wars.
  //Creo el objeto httpRequest.
  let httpRequest = new XMLHttpRequest();

  /**
   * Abro la conexión con el método open, añadiéndole los siguientes parámetros:
   *      ->El tipo de envío (GET/POST)
   *      ->La url a donde dirigirme
   *      ->El tipo de sincronismo:
   *          ->true = ASINCRONISMO
   *          ->false = SINCRONISMO
   */
  httpRequest.open("GET", url);

  httpRequest.addEventListener(
    "readystatechange",
    () => {
      // Si está recibiendo datos.
      if (httpRequest.readyState == 3) {
        if (document.getElementById("personajes") != null) {
          body.removeChild(document.getElementById("personajes"));
        } else if (document.getElementById("cargandoPersonajes") == null) {
          let body = document.getElementById("body");
          let p = document.createElement("p");
          p.innerHTML = "Cargando...";
          p.id = "cargandoPersonajes";
          body.appendChild(p);
        }
      }

      // Si la comunicación ha sido correcta.
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        almacenarPersonajes(JSON.parse(httpRequest.response));
      }
    },
    true
  );
  httpRequest.send();
}

export { conectarmeConLaApi };
