"use strict";

import * as plantilla from "./plantilla_Html.js";
import * as funcionesFirebase from "./funciones_Firebase.js";

/**
 *
 */
function declararEventosInicio() {
  document.getElementById("productos").addEventListener("click", function () {
    plantilla.eliminarPlantillasInsertadas();
    plantilla.insertarPlantillaHeaderProducto();
    plantilla.insertarPlantillaProductos();
    plantilla.insertarPlantillaFooter();
    funcionesFirebase.mostrarTodosProductos();
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
  document.getElementById("mostrarProductos").addEventListener(
    "click",
    function () {
      plantilla.insertarPlantillaHeaderProducto();
      plantilla.insertarPlantillaCarruselProductos();
      plantilla.insertarPlantillaFooter();
      funcionesFirebase.mostrarTodosProductos();
    },
    false
  );

  document
    .getElementById("ordenarProductos")
    .addEventListener("click", function () {}, false);

  document
    .getElementById("filtrarProductos")
    .addEventListener("click", function () {}, false);
}

function declararEventosSeccionLista() {
  declararEventoRedirigirInicio();
}
export { declararEventosInicio };
