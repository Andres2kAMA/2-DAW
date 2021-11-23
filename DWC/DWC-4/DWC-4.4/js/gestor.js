"use strict";

//Práctica 4.4 - Gestor de tareas

//Me guardo las plantillas que tendrán las tareas
var plantillaTareaPendiente =
  " <p>Texto de la tarea</p> <p class='botones'> <input type='button' value='Borrar' onclick='borrarTarea(this)' id='del' /> <input type='button' value='Acabar' onclick='acabarTarea(this)' id='end' /> </p>";

var plantillaTareaAcabada =
  " <p>Texto de la tarea</p> <p class='botones'> <input type='button' value='Archivar' onclick='archivarTarea(this)' class='del' /> <input type='button' value='Volver' onclick='volverTarea(this)' class='end' /> </p>";

function borrarElementosPorDefecto() {
  let divPendientes = document.getElementById("pendientes");
  let divEliminarPendientes = document.getElementsByClassName("tarea");

  //Hasta que queden tareas por eliminar, el contenedor de las tareas pendientes eliminará a sus hijos
  while (divEliminarPendientes.length != 0) {
    divPendientes.removeChild(divEliminarPendientes[0]);
  }

  let div = document.getElementById("acabadas");
  let divEliminar = document.getElementsByClassName("acabada");

  //Hasta que queden tareas por eliminar, el contenedor de las tareas acabadas eliminará a sus hijos
  while (divEliminar.length != 0) {
    div.removeChild(divEliminar[0]);
  }
}

/** FUNCIONES EN EL CONTENEDOR TAREAS PENDIENTES*/

/**
 * El objetivo de la tarea es eliminarla para siempre. Además, el parámetro que le entra a la función será
 * el propio botón.
 *
 * @param {input} boton
 */
function borrarTarea(boton) {
  //Selecciono el padre del botón, que será una etiqueta "p".
  let parrafoPadre = boton.parentNode;

  //Selecciono la tarea
  let tareaEliminar = parrafoPadre.parentNode;

  //Selecciono al contenedor de las tareas pendientes y elimino la tarea
  let divPendientes = tareaEliminar.parentNode;
  divPendientes.removeChild(tareaEliminar);
}

/**
 * El objetivo de la tarea es transparar la tarea del contenedor de tareas 'Pendientes', al contenedor de
 * tareas 'Acabadas'.
 *
 * @param {input} boton
 */
function acabarTarea(boton) {
  //Selecciono el párrafo que almacena el botón
  let parrafoPadre = boton.parentNode;

  //Selecciono la tarea
  let tareaACambiar = parrafoPadre.parentNode;

  //Me almaceno el texto de la tarea
  let textoUsuario = tareaACambiar.getElementsByTagName("p")[0].innerHTML;

  //Selecciono el contenedor de las tareas pendientes y elimino la tarea
  let divPendientes = tareaACambiar.parentNode;
  divPendientes.removeChild(tareaACambiar);

  //Me almaceno el contenedor de tareas acabadas
  let divAcabadas = document.getElementById("acabadas");

  //Creo un 'div' al que le añado una class
  let tareaAcabada = document.createElement("div");
  tareaAcabada.className = "acabada";

  //Cambio el texto por defecto de la plantilla por la tarea del usuario
  let plantillaInsertar = plantillaTareaAcabada.replace(
    "<p>Texto de la tarea</p>",
    "<p>" + textoUsuario + "</p>"
  );

  //Le inserto la plantilla a la tarea
  tareaAcabada.innerHTML = plantillaInsertar;

  //Inserto la tarea en el contenedor de tareas acabadas
  divAcabadas.appendChild(tareaAcabada);
}

/** FUNCIONES EN EL CONTENEDOR TAREAS ACABADAS*/

/**
 * Esta función será una modificación de la función 'acabarTarea()'. El objetivo de esta es
 * cambiar la tarea del contenedor de tareas acabadas al contenedor de tareas pendientes.
 *
 * @param {input} boton
 */
function volverTarea(boton) {
  //Selecciono el párrafo que almacena el botón
  let parrafoPadre = boton.parentNode;

  //Selecciono la tarea a cambiar
  let tareaACambiar = parrafoPadre.parentNode;

  //Me almaceno el texto de la tarea
  let textoUsuario = tareaACambiar.getElementsByTagName("p")[0].innerHTML;

  //Selecciono al contenedor de las tareas acabadas y elimino la tarea
  let divAcabadas = tareaACambiar.parentNode;
  divAcabadas.removeChild(tareaACambiar);

  //Selecciono el contenedor de las tareas pendientes
  let divPendientes = document.getElementById("pendientes");

  //Me creo un div al que le añado una class
  let divPendiente = document.createElement("div");
  divPendiente.className = "tarea";

  //Cambio el texto por defecto de la plantilla por la tarea del usuario
  let plantillaInsertar = plantillaTareaPendiente.replace(
    "<p>Texto de la tarea</p>",
    "<p>" + textoUsuario + "</p>"
  );

  //Le inserto la plantilla modificada a la tarea
  divPendiente.innerHTML = plantillaInsertar;

  //Añado la tarea al contenedor de las tareas pendientes
  divPendientes.appendChild(divPendiente);
}

/**
 * El objetivo de está función será añadir una clase que
 * ocultará la tarea
 *
 * @param {input} boton
 */
function archivarTarea(boton) {
  //Selecciono al padre que almacena el boton
  let parrafoPadre = boton.parentNode;

  //Selecciono la tarea a archivar
  let tareaAArchivar = parrafoPadre.parentNode;

  //Le añado la clase
  tareaAArchivar.classList.add("tareaOcultada");
}

/** FUNCIONES DEL GESTOR DE TAREAS */

/**
 * El objetivo de esta función es quitar la clase que ocultaba las tareas
 * a todas las tareas
 */
function mostrarTareasOcultadas() {
  //Selecciono el contenedor de las tareas acabadas
  let divAcabadas = document.getElementById("acabadas");

  //Selecciono todas las tareas
  let tareasAcabadas = divAcabadas.getElementsByTagName("div");

  //A todas las tareas, le añado solamente UNA clase, por lo que
  //si tenían la clase que las ocultaba, esta desaparecerá
  for (let i = 0; i < tareasAcabadas.length; i++) {
    tareasAcabadas[i].className = "acabada";
  }
}

/**
 * El objetivo de esta tarea será comprobar que el usuario no introduce ninguna cadena vacia.
 * En caso que no lo haga, se añadirá la tarea al contenedor de tareas pendientes
 */
function anyadirTarea() {
  /**
   * Creo una expresión regular para eliminar los espacios. La función de los
   * elementos de la expresión regular es la siguiente:
   * '/'  --> indica que se va a emprezar a escribir una expresión regular
   * '\s' --> selecciona un espacio (de la string que le pasemos)
   * '+'  --> repite la función '\s' a lo largo de la string
   * '/'  --> indica que la expresión regular ha terminado
   */
  let regExp = /\s+/;

  //Me almaceno el texto de la tarea
  let textoUsuario = document.getElementsByTagName("textarea")[0];

  //Si la cadena contiene texto, se añadirá la tarea
  if (textoUsuario.value.replace(regExp, "").length != 0) {
    //Selecciono al contenedor de tareas pendientes
    let divPendientes = document.getElementById("pendientes");

    //Me creo el div de la tarea al que le añado una clase
    let tareaAnyadir = document.createElement("div");
    tareaAnyadir.className = "tarea";

    //Cambio el texto por defecto de la plantilla por la tarea del usuario
    let plantillaInsertar = plantillaTareaPendiente.replace(
      "<p>Texto de la tarea</p>",
      "<p>" + textoUsuario.value + "</p>"
    );

    //Añado la plantilla a la tarea
    tareaAnyadir.innerHTML = plantillaInsertar;

    //Elimino el texto del textarea (donde se escriben las tareas)
    textoUsuario.value = "";

    //Añado la tarea al contenedor de tareas pendientes
    divPendientes.appendChild(tareaAnyadir);
  } else {
    //Si la cadena no contiene texto, mostrará un mensaje de error
    alert("NO VAS A ROMPERME EL PROGRAMA UwU");
  }
}

//Añado dos eventos "click" a los botones que añaden y muestran tareas. (1 evento por botón)
document.getElementById("add").addEventListener("click", anyadirTarea, false);

document
  .getElementById("sho")
  .addEventListener("click", mostrarTareasOcultadas, false);

//borro todos los elementos por defecto
borrarElementosPorDefecto();
