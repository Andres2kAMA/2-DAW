"use strict";

import * as plantilla from "./plantilla_Html.js";

/**
 *
 */
function declararEventosInicio() {
  document.getElementById("productos").addEventListener("click", function () {
    plantilla.eliminarPlantillasInsertadas();
    plantilla.insertarPlantillaHeaderProducto();
    plantilla.insertarPlantillaPresentacion();
    plantilla.insertarPlantillaFooter();
    declararEventosSeccionProducto();
  });

  document.getElementById("listas").addEventListener(
    "click",
    function () {
      plantilla.eliminarPlantillasInsertadas();
      plantilla.insertarPlantillaHeaderLista();
      plantilla.insertarPlantillaPresentacion();
      plantilla.insertarPlantillaFooter();
      declararEventosSeccionLista();
    },
    false
  );
}

function declararEventoRedirigirInicio() {
  document.getElementById("inicio").addEventListener(
    "click",
    function () {
      plantilla.eliminarPlantillasInsertadas();
      plantilla.insertarPlantillaHeaderInicio();
      plantilla.insertarPlantillaPresentacion();
      plantilla.insertarPlantillaFooter();
      insertarEventosPrincipales();
    },
    false
  );
}

function declararEventosSeccionProducto() {
  declararEventoRedirigirInicio();
}

function declararEventosSeccionLista() {
  declararEventoRedirigirInicio();
}
export { declararEventosInicio };
