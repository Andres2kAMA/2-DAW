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

export { borrarElementosPorDefecto };
