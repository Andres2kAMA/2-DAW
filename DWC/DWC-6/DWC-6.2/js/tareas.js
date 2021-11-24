import * as devolverPlantilla from "./devolverElementos.js";

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
  let plantillaInsertar = devolverPlantilla.devolverPlantillaAcabadaModificada(
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
    function () {
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
    let plantillaInsertar =
      devolverPlantilla.devolverPlantillaPendienteModificada(
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
 * Le añado una clase
 * @param {div} ev
 */
function archivarTarea(ev) {
  ev.classList.add("tareaOcultada");
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
  let plantillaInsertar =
    devolverPlantilla.devolverPlantillaPendienteModificada(
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
 *
 * @param {div} nuevoNodo
 * @param {div} nodoExistente
 */
function insertAfter(nuevoNodo, nodoExistente) {
  nodoExistente.parentNode.insertBefore(nuevoNodo, nodoExistente.nextSibling);
}

export {
  acabarTarea,
  anyadirTarea,
  archivarTarea,
  borrarTarea,
  volverTarea,
  insertAfter,
};
