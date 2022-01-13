"use strict";

import * as funcionesFirebase from "./funciones_Firebase.js";

function anyadirEventosBotones() {
  document.getElementById("listar").addEventListener(
    "click",
    function () {
      funcionesFirebase.listarProductos();
    },
    false
  );

  document.getElementById("filtrar").addEventListener(
    "click",
    function () {
      funcionesFirebase.filtrarProductos();
    },
    false
  );
  document.getElementById("ordenar").addEventListener(
    "click",
    function () {
      funcionesFirebase.ordenarProductos();
    },
    false
  );
}

export { anyadirEventosBotones };
