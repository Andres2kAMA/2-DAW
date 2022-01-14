"use strict";

import * as funcionesFirebase from "./funciones_Firebase.js";

/**
 * Añado eventos a los eventos a cada botón.
 */
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
      filtrarFormulario();
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

/**
 * Filtro el formulario.
 */
function filtrarFormulario() {
  //Me almaceno el formulario
  let formulario = document.getElementById("form");

  for (let i = 0; i < formulario.length; i++) {
    //Si el nombre no está vacío filtro por el nombre.
    if (i == 0) {
      if (formulario[i].value != "") {
        funcionesFirebase.filtrarPorNombre(formulario[i].value);
        break;
      }
    } else {
      //Si el filtrado por el precio vale distinto de 0, fltro por el precio.
      if (i == 1) {
        if (formulario[i].value != 0) {
          funcionesFirebase.filtrarPorNumero(formulario[i].value, "precio");
          break;
        }
        //Si el filtrado por el peso vale distinto de 0, fltro por el precio.
      } else {
        if (formulario[i].value != 0) {
          funcionesFirebase.filtrarPorNumero(formulario[i].value, "peso");
          break;
        }
      }
    }
  }
}

export { anyadirEventosBotones, filtrarFormulario };
