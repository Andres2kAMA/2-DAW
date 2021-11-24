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

export { estaDentroPendientes, esHermanaMayor };
