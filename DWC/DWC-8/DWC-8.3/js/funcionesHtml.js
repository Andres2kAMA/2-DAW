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

  document.getElementById("filtrarNombreProducto").addEventListener(
    "click",
    function () {
      let campoForm = devolverDatosFormulario("formProductoNombre");
      if (campoForm != "") funcionesFirebase.filtrarPorNombre(campoForm);
    },
    false
  );

  document.getElementById("filtrarPesoProducto").addEventListener(
    "click",
    function () {
      let campoForm = devolverDatosFormulario("formProductoPeso");

      if (campoForm >= 0) funcionesFirebase.filtrarPorNumero(campoForm, "peso");
    },
    false
  );

  document.getElementById("filtrarPrecioProducto").addEventListener(
    "click",
    function () {
      let campoForm = devolverDatosFormulario("formProductoPrecio");
      if (campoForm >= 0)
        funcionesFirebase.filtrarPorNumero(campoForm, "precio");
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
function devolverDatosFormulario(idForm) {
  //Me almaceno el formulario
  let formulario = document.getElementById(idForm);

  return formulario[0].value;
}

export { anyadirEventosBotones, devolverDatosFormulario };
