//Me creo un array donde almacenaré todos los personajes.
var personajes = new Array();
var datosPersonajes = new Array();

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

function mostrarInformacionPersonaje(posicionArray) {
  let body = document.getElementById("body");

  //Si no se ha insertado el título de los datos del personaje anteriormente, lo inserto.
  if (document.getElementById("datosPersonajes") == null) {
    anyadirEtiquetaPersonalizada(
      "h2",
      "Datos del personaje",
      "datosPersonajes"
    );
  } else {
    body.removeChild(document.getElementById("datosPersonaje"));
  }

  //Creo un nav y le inserto un id
  let nav = document.createElement("nav");
  nav.id = "datosPersonaje";

  //Creo una etiqueta ul.
  let ul = document.createElement("ul");

  /**
   * Por cada personaje:
   *  ->Creo un li.
   *  ->Le añado un personaje.
   *  ->Lo añado al ul.
   */
  for (let i = posicionArray; i < posicionArray + 1; i++) {
    for (let j = 0; j < datosPersonajes[i].length; j++) {
      let li = document.createElement("li");

      li.innerHTML = datosPersonajes[i][j];
      li.className = "datosPersonaje";
      ul.appendChild(li);
    }
  }

  //Borro los datos del array.
  personajes = new Array();

  //Añado la lita al body.
  nav.appendChild(ul);
  body.appendChild(nav);
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
  personajes.push(personaje);

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

function obtenerPersonaje(url) {
  let httpRequest = new XMLHttpRequest();

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
          //Si no, muestro un mensaje de que se están cargando los personajes.¡
          anyadirEtiquetaPersonalizada(
            "p",
            "Cargando...",
            "cargandoPersonajes"
          );
        } else if (document.getElementById("datosPersonajes") != null) {
          body.removeChild(document.getElementById("datosPersonajes"));
          body.removeChild(document.getElementById("datosPersonaje"));
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

function conectarmeConLaApi(url) {
  return new Promise((resolver) => {
    let httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", url);

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
  });
}

export { conectarmeConLaApi, mostrarPeliculas };
