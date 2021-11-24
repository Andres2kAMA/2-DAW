import * as devolverPlantilla from "./devolverElementos.js";
import * as acabarTarea from "./acabarTarea.js";
import * as borrarTarea from "./eliminarTarea.js";

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
        borrarTarea.borrarTarea(ev.target);
      },
      false
    );
    document.getElementById(`acabar-${numTarea}`).addEventListener(
      "click",
      function (ev) {
        acabarTarea.acabarTarea(ev.target);
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

export { anyadirTarea };
