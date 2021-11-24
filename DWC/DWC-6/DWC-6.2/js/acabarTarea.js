import * as devolverPlantilla from "./devolverElementos.js";
import * as acabarTarea from "./acabarTarea.js";
import * as volverTarea from "./volverTarea.js";

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
      archivarTarea.archivarTarea(tareaAcabada);
    },
    false
  );

  document.getElementById(`volver-${numeroTarea}`).addEventListener(
    "click",
    function (ev) {
      volverTarea.volverTarea(ev.target);
    },
    false
  );
}

export { acabarTarea };
