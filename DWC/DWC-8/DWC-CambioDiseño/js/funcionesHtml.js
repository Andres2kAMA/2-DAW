"use strict";

import * as plantilla from "./plantillaHtml.js";

function insertarEventosPrincipales() {
  document.getElementById("productos").addEventListener("click", function () {
    plantilla.eliminarPlantillasInsertadas();
    plantilla.insertarPlantillaHeaderProducto();
    plantilla.insertarPlantillaPresentacion();
    plantilla.insertarPlantillaFooter();
  });
}

export { insertarEventosPrincipales };
