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

export {
  devolverPlantillaPendienteModificada,
  devolverPlantillaAcabadaModificada,
  devolverTarea,
  devolverDivPendientes,
};
