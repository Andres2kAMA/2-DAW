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

export { volverTarea };
