"use strict";

//Práctica 5.2 - Gestor de tareas 2

window.onload = function () {
  /**
   *Creo dos variables:
   *  ->La primera será un contador de las tareas añadidas
   *  ->La segunda sera una variable que almacenará el elemento arrastrado
   */
  var tareasAnyadidas;
  var elementoArrastrado;

  /**
   * Me traigo el primer h1 de la página, que lo utilizaré para:
   *  ->Darle estilo
   *  ->Insertar el error si el usuario inserta la tarea erróneamente
   */
  var primerParrafo = document.getElementsByTagName("h1")[0];
  primerParrafo.className = "colorBlanco";

  /**
   * Me creo dos variables que contendrán una plantilla, tanto para las tareas pendientes como para las acabadas
   */
  var plantillaTareaPendiente = ` <p>Texto de la tarea</p> <p class='botones moverTarea'> <input type='button' value='Borrar' class='del' /> <input type='button' value='Acabar' class='end' /> </p>`;

  var plantillaTareaAcabada = ` <p>Texto de la tarea</p> <p class='botones'> <input type='button' value='Archivar' class='del' /> <input type='button' value='Volver'  class='end' /> </p>`;

  /**
   *
   * @param {int} numeroTarea
   * @param {String} textoUsuario
   * @returns Devuelvo la plantilla de la tarea con:
   *            ->El texto introducido por el usuario
   *            ->Los id pertinentes
   */
  function devolverPlantillaPendienteModificada(numeroTarea, textoUsuario) {
    let plantillaDevolver = plantillaTareaPendiente.replace(
      "<p>Texto de la tarea</p>",
      "<p class='moverTarea'>" + textoUsuario + "</p>"
    );

    plantillaDevolver = plantillaDevolver.replace(
      "<input type='button' value='Borrar' class='del' />",
      "<input type='button' value='Borrar' class='del moverTarea' id='borrar-" +
        numeroTarea +
        "' />"
    );

    plantillaDevolver = plantillaDevolver.replace(
      "<input type='button' value='Acabar' class='end' /> ",
      "<input type='button' value='Acabar' class='end moverTarea' id='acabar-" +
        numeroTarea +
        "'   /> "
    );

    return plantillaDevolver;
  }

  /**
   *
   * @param {int} numeroTarea
   * @param {String} textoUsuario
   * @returns Devuelvo la plantilla de la tarea con:
   *            ->El texto introducido por el usuario
   *            ->Los id pertinentes
   */
  function devolverPlantillaAcabadaModificada(numeroTarea, textoUsuario) {
    let plantillaDevolver = plantillaTareaAcabada.replace(
      "<p>Texto de la tarea</p>",
      "<p>" + textoUsuario + "</p>"
    );

    plantillaDevolver = plantillaDevolver.replace(
      "<input type='button' value='Archivar' class='del' />",
      "<input type='button' value='Archivar' class='del' id='archivar-" +
        numeroTarea +
        "' />"
    );

    plantillaDevolver = plantillaDevolver.replace(
      "<input type='button' value='Volver'  class='end' /> ",
      "<input type='button' value='Volver'  class='end' id='volver-" +
        numeroTarea +
        "' />"
    );

    return plantillaDevolver;
  }

  /**
   * Selecciono todas las tareas por defecto y las elimino
   */
  function borrarElementosPorDefecto() {
    let divPendientes = document.getElementById("pendientes");
    let divEliminarPendientes = document.getElementsByClassName("tarea");

    while (divEliminarPendientes.length != 0) {
      divPendientes.removeChild(divEliminarPendientes[0]);
    }

    let div = document.getElementById("acabadas");
    let divEliminarAcabadas = document.getElementsByClassName("acabada");

    while (divEliminarAcabadas.length != 0) {
      div.removeChild(divEliminarAcabadas[0]);
    }
  }

  /**
   *
   * @param {int} numTarea
   */
  function anyadirTarea(numTarea) {
    let regExp = /\s+/;

    //Recojo el texto del usuario
    let textoUsuario = document.getElementsByTagName("textarea")[0];

    //Si el usuario a introducido una cadena válida, añado la tarea
    if (textoUsuario.value.replace(regExp, "").length != 0) {
      //Selecciono el contenedor de "pendientes"
      let divPendientes = document.getElementById("pendientes");

      /**
       * Me creo un div al que:
       *  ->Le añado dos clases
       *  ->Indico que se pueda arrartar
       */
      let tareaAnyadir = document.createElement("div");
      tareaAnyadir.className = "tarea moverTarea";
      tareaAnyadir.setAttribute("draggable", "true");

      //Me almaceno la plantilla modificada
      let plantillaInsertar = devolverPlantillaPendienteModificada(
        numTarea,
        textoUsuario.value
      );

      //Añado la plantilla como hija del div
      tareaAnyadir.innerHTML = plantillaInsertar;

      //Borro el texto que había puesto el usuario
      textoUsuario.value = "";

      //Añado la tarea al contenedor de "pendientes"
      divPendientes.appendChild(tareaAnyadir);

      //Seleccionando el ID, le añado dos funciones con el evento "click"
      document.getElementById(`borrar-${numTarea}`).addEventListener(
        "click",
        function (ev) {
          borrarTarea(ev.target);
        },
        false
      );
      document.getElementById(`acabar-${numTarea}`).addEventListener(
        "click",
        function (ev) {
          acabarTarea(ev.target);
        },
        false
      );

      //En el caso de que le haya saltado un error por introducir la tarea erróneamente,
      //ya que ahora se ha introducido correctamente, elimino el mensaje de error.
      if (document.getElementById("error") != null) {
        document
          .getElementById("error")
          .parentNode.removeChild(document.getElementById("error"));
      }
    } else {
      //Si no ha introducido la tarea erróneamente anteriormente, entra en el condicional
      if (document.getElementById("error") == null) {
        /**
         * Me creo un párrafo al que:
         *  ->Le añado un ID
         *  ->Le añado el mensaje de error
         *  ->Le inserto justo después del primer H1 del programa
         */
        var parrafoError = document.createElement("p");
        parrafoError.id = "error";
        parrafoError.innerText = "NO VAS A ROMPERME EL PROGRAMA <3";
        primerParrafo.insertAdjacentElement("afterend", parrafoError);
      }
    }
  }

  /**
   *
   * @param {input} ev
   */
  function acabarTarea(ev) {
    //Me almaceno el número de tarea
    let idTarea = ev.id;
    let numeroTarea = idTarea.split("-")[1];

    //Selecciono a la tarea entera
    let parrafoPadre = ev.parentNode;
    let tareaACambiar = parrafoPadre.parentNode;

    //Me almaceno el texto de la tarea
    let textoUsuario = tareaACambiar.getElementsByTagName("p")[0].innerHTML;

    //Selecciono el contenedor de "pendientes"
    let divPendientes = tareaACambiar.parentNode;

    //Elimino la tarea
    divPendientes.removeChild(tareaACambiar);

    //Selecciono el contenedor de las tareas acabadas
    let divAcabadas = document.getElementById("acabadas");

    /**
     * Me creo un div al que:
     *  ->Le añado dos clases
     *  ->Indico que se pueda arrartar
     */
    let tareaAcabada = document.createElement("div");
    tareaAcabada.className = "acabada";
    tareaAcabada.setAttribute("draggable", "true");

    //Me almaceno la plantilla modificada
    let plantillaInsertar = devolverPlantillaAcabadaModificada(
      numeroTarea,
      textoUsuario
    );

    //Inserto la plantilla al div
    tareaAcabada.innerHTML = plantillaInsertar;

    //Inserto la tarea al contenedor
    divAcabadas.appendChild(tareaAcabada);

    //Le añado dos eventos con la función "click"
    document.getElementById(`archivar-${numeroTarea}`).addEventListener(
      "click",
      function (ev) {
        archivarTarea(tareaAcabada);
      },
      false
    );

    document.getElementById(`volver-${numeroTarea}`).addEventListener(
      "click",
      function (ev) {
        volverTarea(ev.target);
      },
      false
    );
  }

  /**
   * Selecciono mediante el input a la tarea y al contenedor de tareas, y la elimino
   * @param {input} ev
   */
  function borrarTarea(ev) {
    let parrafoPadre = ev.parentNode;

    let tareaEliminar = parrafoPadre.parentNode;

    let divPendientes = tareaEliminar.parentNode;

    divPendientes.removeChild(tareaEliminar);
  }

  /**
   * Muevo la terea del contenedor de acabadas al contenedor de pendientes
   * @param {input} ev
   */
  function volverTarea(ev) {
    //Selecciono el número de la tarea
    let numeroTarea = ev.id;
    numeroTarea = numeroTarea.split("-")[1];
    let parrafoPadre = ev.parentNode;

    //Selecciono la tarea y el texto de la tarea
    let tareaACambiar = parrafoPadre.parentNode;
    let textoUsuario = tareaACambiar.getElementsByTagName("p")[0].innerHTML;

    //Elimino la tarea del contenedor "acabadas"
    let divAcabadas = tareaACambiar.parentNode;
    divAcabadas.removeChild(tareaACambiar);

    //Selecciono el contenedor "pendientes" y:
    let divPendientes = document.getElementById("pendientes");

    /**
     * Me creo un div al que:
     *  ->Le añado una clase
     *  ->Indico que puede ser arrastrada
     */
    let divPendiente = document.createElement("div");
    divPendiente.className = "tarea moverTarea";
    divPendiente.setAttribute("draggable", "true");

    //Me almaceno la plantilla
    let plantillaInsertar = devolverPlantillaPendienteModificada(
      numeroTarea,
      textoUsuario
    );

    //Inserto la plantilla al div
    divPendiente.innerHTML = plantillaInsertar;

    //Inserto el div al contenedor de "pendientes"
    divPendientes.appendChild(divPendiente);

    //Le añado dos eventos
    document.getElementById(`borrar-${numeroTarea}`).addEventListener(
      "click",
      function (ev) {
        borrarTarea(ev.target);
      },
      false
    );
    document.getElementById(`acabar-${numeroTarea}`).addEventListener(
      "click",
      function (ev) {
        acabarTarea(ev.target);
      },
      false
    );
  }

  /**
   * Le añado una clase
   * @param {div} ev
   */
  function archivarTarea(ev) {
    ev.classList.add("tareaOcultada");
  }

  /**
   * Muestro todas las tareas
   */
  function mostrarTareasOcultadas() {
    let divAcabadas = document.getElementById("acabadas");

    let tareasAcabadas = divAcabadas.getElementsByTagName("div");

    for (let i = 0; i < tareasAcabadas.length; i++) {
      tareasAcabadas[i].className = "acabada";
    }
  }

  /**
   *
   * @param {div} nuevoNodo
   * @param {div} nodoExistente
   */
  function insertAfter(nuevoNodo, nodoExistente) {
    nodoExistente.parentNode.insertBefore(nuevoNodo, nodoExistente.nextSibling);
  }

  /**
   *
   * @param {*} elementoAComprobar
   * @returns Devuleve true si el elemento está dentro del contenedor "pendientes"
   */
  function estaDentroPendientes(elementoAComprobar) {
    var elementoPadre = elementoAComprobar;
    if (elementoAComprobar != undefined) {
      for (let i = 0; i < 4; i++) {
        if (elementoPadre.id == "pendientes") {
          return true;
        }
        elementoPadre = elementoPadre.parentNode;
      }
    }
    return false;
  }

  /**
   *
   * @param {*} elemento
   * @returns Devuelve el div
   */
  function devolverDivPendientes(elemento) {
    var elementoAComprobar = elemento;
    while (elementoAComprobar.id != "pendientes") {
      elementoAComprobar = elementoAComprobar.parentNode;
    }
    return elementoAComprobar;
  }

  /**
   *
   * @param {div} tareaAMover
   * @param {div} tareaHermana
   * @param {int} tareas
   * @returns Devuelve true si la "tareaAMover" está situada más arriba que "tareaHermana"
   */
  function esHermanaMayor(tareaAMover, tareaHermana, tareas) {
    for (let i = 1; i < tareas.length; i++) {
      if (tareas[i] == tareaAMover) {
        return true;
      } else if (tareas[i] == tareaHermana) {
        return false;
      }
    }

    return false;
  }

  /**
   *
   * @param {*} target
   * @returns Devuelve la tarea si la encuentra
   */
  function devolverTarea(target) {
    var elementoAComprobar = target;
    for (let i = 0; i < 3; i++) {
      if (elementoAComprobar.className == "tarea moverTarea") {
        return elementoAComprobar;
      }
      elementoAComprobar = elementoAComprobar.parentNode;
    }
    return false;
  }

  //Evento aplicado al botón añadir
  document.getElementById("add").addEventListener(
    "click",
    function () {
      if (tareasAnyadidas == undefined) {
        tareasAnyadidas = 0;
      } else {
        tareasAnyadidas++;
      }
      anyadirTarea(tareasAnyadidas);
    },
    false
  );

  //Evento aplicado al botón mostrar
  document.getElementById("sho").addEventListener(
    "click",
    function () {
      mostrarTareasOcultadas();
    },
    false
  );

  //Cuando empiezo a arrastrar un elemento, se almacena si está dentro del
  //contenedor de "pendientes" o "acabadas"
  document.addEventListener(
    "dragstart",
    function (ev) {
      if (
        ev.target.className == "tarea moverTarea" ||
        ev.target.className == "acabada"
      ) {
        elementoArrastrado = ev.target;
      }
    },
    false
  );

  document.addEventListener(
    "dragover",
    function (ev) {
      ev.preventDefault();
    },
    false
  );

  //Si el drop se hace en el contenedor "acabadas", ejecuto la función 'acabarTarea()'
  document.addEventListener(
    "drop",
    function (ev) {
      ev.preventDefault();

      if (ev.target.id == "acabadas") {
        acabarTarea(elementoArrastrado.getElementsByTagName("input")[0]);
      }
    },
    false
  );

  /**
   * Cuando el elemento arrastrado entre en un elemento:
   *  Le aplico al elemento:
   *    ->Un borde negro de 5px
   *    ->Una transparencia del 50%
   *
   *  Le aplico al elemento.target (siempre que se pueda poner estilo)
   *    ->Un fondo azul
   */
  document.addEventListener(
    "dragenter",
    function (ev) {
      elementoArrastrado.style.border = "5px solid black";
      elementoArrastrado.style.opacity = ".5";
      if (ev.target.style != undefined)
        ev.target.style.backgroundColor = "#21618C";
    },
    false
  );

  /**
   * Cuando el elemento arrastrado sale de un elemento:
   *  Le quito al elemento.target (siempre que se pueda poner estilo) el fondo
   */
  document.addEventListener(
    "dragleave",
    function (ev) {
      if (ev.target.style != undefined) ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Cuando acabo de arrastrar el elemento, elimino el fondo donde suelto el elemento arrastrado
   */
  document.addEventListener(
    "dragend",
    function (ev) {
      ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Cuando suelto el elemento
   *  Si está dentro del contenedor "pendientes"
   *    ->Ejecuto la función volverTarea()
   *  
      ->Le quito el borde al elemento arrastrado
      ->Le quito la transparencia al elemento arrastrado
   */
  document.addEventListener(
    "drop",
    function (ev) {
      ev.preventDefault();
      if (ev.target.id == "pendientes") {
        volverTarea(elementoArrastrado.getElementsByTagName("input")[0]);
      }
      elementoArrastrado.style.border = "";
      elementoArrastrado.style.opacity = "1";
      ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Reordeno las tareas dentro del contenedor "pendientes"
   */
  document.addEventListener(
    "drop",
    function (ev) {
      if (ev.target.tagName != "HTML") {
        //Siempre que esté dentro de pendientes
        if (
          (elementoArrastrado.classList[0] == "moverTarea" &&
            estaDentroPendientes(ev.target)) ||
          (elementoArrastrado.classList[1] == "moverTarea" &&
            estaDentroPendientes(ev.target))
        ) {
          //Selecciono al contenedor "pendientes"
          var divPadre = devolverDivPendientes(ev.target);

          //Selecciono a la hermana
          var tareaHermana = devolverTarea(ev.target);

          //Si tiene hermana entra al condicional
          if (tareaHermana != false) {
            //Si el elemento es mayor que la hermana mayor, inserta la tarea después que la hermana pequeña
            if (
              esHermanaMayor(
                elementoArrastrado,
                tareaHermana,
                divPadre.children
              )
            ) {
              insertAfter(elementoArrastrado, tareaHermana);
            } else {
              //Si no, la inserta antes
              divPadre.insertBefore(elementoArrastrado, tareaHermana);
            }
          } else {
            //Si el ev.target.tagName es un H1
            if (ev.target.tagName == "H1") {
              //Se inserta después del H1
              divPadre.insertBefore(elementoArrastrado, divPadre.children[1]);
            }
          }
        }
      }
    },
    false
  );

  borrarElementosPorDefecto();
};
