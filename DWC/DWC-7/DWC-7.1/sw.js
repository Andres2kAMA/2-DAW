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
 * Esta función añadirá al body una etiqueta personalizada.
 * @param {String} etiqueta
 * @param {String} texto
 * @param {String} id
 */
function anyadirEtiquetaPersonalizada(etiquetaUsuario, texto, id) {
  let body = document.getElementById("body");
  let etiqueta = document.createElement(etiquetaUsuario);
  etiqueta.innerHTML = texto;
  etiqueta.id = id;
  body.appendChild(etiqueta);
}

/**
 * Esta función la utilizaré para mostrar los personajes.
 */
function mostrarPersonajesPelicula() {
  let body = document.getElementById("body");

  //Elimino el mensaje 'Cargando...'.
  if (document.getElementById("cargandoPersonajes") != null) {
    body.removeChild(document.getElementById("cargandoPersonajes"));
  }

  //Si no se ha insertado el título de los personajes anteriormente, lo inserto.
  if (document.getElementById("tituloPersonajes") == null) {
    anyadirEtiquetaPersonalizada("h2", "Personajes", "tituloPersonajes");
  }

  //Creo un nav y le inserto un id
  let nav = document.createElement("nav");
  nav.id = "personajes";

  //Creo una etiqueta ul.
  let ul = document.createElement("ul");

  /**
   * Por cada personaje:
   *  ->Creo un li.
   *  ->Le añado un personaje.
   *  ->Lo añado al ul.
   */
  for (let i = 0; i < personajes.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = personajes[i];
    ul.appendChild(li);
  }

  //Borro los datos del array.
  personajes = new Array();

  //Añado la lita al body.
  nav.appendChild(ul);
  body.appendChild(nav);
}

/**
 * Envío una petición para obtener los datos de los personajes.
 * @param {String} personajes
 */
function enviarPeticionPersonajes(personajes) {
  for (let i = 0; i < 10; i++) {
    obtenerPersonaje(personajes[i]);
  }
}

/**
 * Cuando se recibe la información de los personajes, entrará en esta función y
 * añadirá el nombre del personaje en el array.
 * Cuando se han introducido 10 personajes, llamo a la función que los muestra
 * @param {Object} personaje
 */
function almacenarPersonajes(personaje) {
  personajes.push(personaje.name);

  if (personajes.length == 10) {
    mostrarPersonajesPelicula();
  }
}

/**
 * Cuando el usuario quiere obtener la información de una película entra aquí.
 * @param {Object} pelicula
 */
function mostrarInformacionPelicula(pelicula) {
  let body = document.getElementById("body");

  /**
   * Muestro la información de la sinopsis.
   */
  mostrarInformacionSinopsis("h2", "Sinopsis", "sinopsis", body);
  mostrarInformacionSinopsis("h3", pelicula.title, "titulo", body);
  mostrarInformacionSinopsis(
    "p",
    pelicula.opening_crawl,
    "textoSinopsis",
    body
  );

  //Envío la petición de los personajes.
  enviarPeticionPersonajes(pelicula.characters);
}

/**
 *
 * @param {Object} pelicula
 * @returns Devuelve un li al que se le añade tanto una clase, como un evento "click".
 */
function obtenerLiModificado(pelicula) {
  let li = document.createElement("li");
  li.className = "peliculas";
  li.addEventListener(
    "click",
    function () {
      mostrarInformacionPelicula(pelicula);
    },
    false
  );
  return li;
}

/**
 *
 * @param {Object} listadoPeliculas
 */
function mostrarPeliculas(listadoPeliculas) {
  //Me almaceno el body.
  let body = document.getElementById("body");

  //Me creo los elementos necesarios para la lista.
  let h2 = document.createElement("h2");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  //Elimino el mensaje 'Cargando...' de las películas.
  if (document.getElementById("cargandoPeliculas") != null) {
    body.removeChild(document.getElementById("cargandoPeliculas"));
  }

  //Añado al body el título 'Películas' junto con el número de las películas.
  h2.innerHTML = `Películas - ${listadoPeliculas.count}`;
  body.appendChild(h2);

  //Le añado eñ nav un id.
  nav.id = "listadoPeliculas";

  //Añado las películas a la lista.
  for (let i = 0; i < listadoPeliculas.count; i++) {
    let li = obtenerLiModificado(listadoPeliculas.results[i]);
    li.innerHTML = `(${listadoPeliculas.results[i].episode_id}) ${listadoPeliculas.results[i].title}`;
    ul.appendChild(li);
  }

  //Añado la lista al body.
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
      // Si está recibiendo datos entro.
      if (httpRequest.readyState == 3) {
        //Si no se ha creado la lista entro.
        if (document.getElementById("listadoPeliculas") == null) {
          //Añado al body el mensaje de que se están cargando los datos.
          let body = document.getElementById("body");
          let p = document.createElement("p");
          p.innerHTML = "Cargando...";
          p.id = "cargandoPeliculas";
          body.appendChild(p);
        }
      }

      // Si la comunicación ha sido correcta.
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Muestro la lista de las películas.
        mostrarPeliculas(JSON.parse(httpRequest.response));
      }
    },
    true
  );
  return httpRequest;
}

function obtenerPersonaje(url) {
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
        //Si se han introducido los personajes los elimino.
        if (document.getElementById("personajes") != null) {
          body.removeChild(document.getElementById("personajes"));
        } else if (document.getElementById("cargandoPersonajes") == null) {
          //Si no, muestro un mensaje de que se están cargando los personajes.
          let body = document.getElementById("body");
          let p = document.createElement("p");
          p.innerHTML = "Cargando...";
          p.id = "cargandoPersonajes";
          body.appendChild(p);
        }
      }

      // Si la comunicación ha sido correcta.
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Almaceno el personaje en el orden en el que se reciben.
        almacenarPersonajes(JSON.parse(httpRequest.response));
      }
    },
    true
  );
  //Envío la petición.
  httpRequest.send();
}

export { conectarmeConLaApi };
