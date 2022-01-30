"use strict";

import * as plantilla from "./plantilla_Html.js";
import * as funcionesFirebase from "./funciones_Firebase.js";

/**
 * Declaro todos los eventos del inicio del programa.
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

/**
 * Declaro un evento para cargar el inicio del programa.
 */
function declararEventoRedirigirInicio() {
  document.getElementById("inicio").addEventListener(
    "click",
    function () {
      plantilla.eliminarPlantillasInsertadas();
      plantilla.insertarPlantillaHeaderInicio();
      plantilla.insertarPlantillaPresentacion();
      plantilla.insertarPlantillaFooter();
      declararEventosInicio();
    },
    false
  );
}

/**
 * Declaro los eventos de la sección de productos de la página web.
 */
function declararEventosSeccionProducto() {
  document.getElementById("mostrarProductos").addEventListener(
    "click",
    function () {
      plantilla.eliminarPlantillasInsertadas();
      plantilla.insertarPlantillaHeaderProducto();
      plantilla.insertarPlantillaProductos();
      plantilla.insertarPlantillaFooter();
      funcionesFirebase.mostrarTodosProductos();
      declararEventoRedirigirInicio();
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

function declararEventosSeccionLista() {}

export { declararEventosInicio };
