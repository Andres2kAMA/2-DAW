"use strict";

import * as funcionesFirebase from "./funciones_Firebase.js";

function anyadirEventosBotones() {
  document.getElementById("listar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();

      funcionesFirebase.listarProductos();
      this.className = "deshabilitado";
    },
    false
  );

  document.getElementById("filtrar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();
      funcionesFirebase.filtrarProductos();
      this.className = "desabilitado";
    },
    false
  );
  document.getElementById("ordenar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();
    },
    false
  );
}

function ponerFuncionalidadBotones() {
  let botones = document.getElementsByTagName("button");
  for (let i = 0; i < botones.length; i++) {
    botones.className = "";
  }
}

export { anyadirEventosBotones };
