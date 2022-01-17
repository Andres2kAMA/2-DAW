"use strict";

import * as funcionesFirebase from "./funciones_Firebase.js";
import * as plantillaHtml from "./plantillasHtml.js";

let productosSeleccionados = [];
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

  document.getElementById("crearLista").addEventListener(
    "click",
    function () {
      productosSeleccionados = [];
      productosSeleccionados = devolverProductosSeleccionados();
      mostrarFormularioCrearLista();
      ocultarTablaProductos();
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

function devolverProductosSeleccionados() {
  let checkbox = document.getElementById("formProductos");
  let productosSeleccionados = [];
  for (let index = 0; index < checkbox.length; index++) {
    if (checkbox[index].type == "checkbox" && checkbox[index].checked)
      productosSeleccionados.push(checkbox[index].value);
  }
  return productosSeleccionados;
}
function mostrarFormularioCrearLista() {
  let lista = document.getElementsByClassName("noMostrar");
  lista[0].className = "";
}

function ocultarFormularioCrearLista() {
  let lista = document.getElementsByClassName("noMostrar");
  lista[0].className = "noMostrar";
}

function mostrarTablaProductos() {
  let lista = document.getElementById("ocultarTablaProducto");
  lista.className = "";
}

function ocultarTablaProductos() {
  let lista = document.getElementById("ocultarTablaProducto");
  lista.className = "noMostrar";
}
export { anyadirEventosBotones, devolverDatosFormulario };
