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

export { borrarTarea };
