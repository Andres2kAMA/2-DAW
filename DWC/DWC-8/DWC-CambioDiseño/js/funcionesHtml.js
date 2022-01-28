"use strict";

import * as plantilla from "./plantillaHtml.js";

function insertarEventosPrincipales() {
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

function declararEventoInicio() {
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
  declararEventoInicio();
}

function declararEventosSeccionLista() {
  declararEventoInicio();
}
export { insertarEventosPrincipales };
