"use strict";

//Importo las funciones necesarias de los ficheros js.
import * as funcionesFirebase from "./funciones_Firebase.js";
import * as plantillaHtml from "./plantillasHtml.js";

//Me declaro dos arrays vacíos.
let productosSeleccionados = [];
let datosLista = [];

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
      let campoForm =
        devolverDatosFormularioFiltrarProducto("formProductoNombre");
      if (campoForm != "") funcionesFirebase.filtrarPorNombre(campoForm);
    },
    false
  );

  document.getElementById("filtrarPesoProducto").addEventListener(
    "click",
    function () {
      let campoForm =
        devolverDatosFormularioFiltrarProducto("formProductoPeso");

      if (campoForm >= 0) funcionesFirebase.filtrarPorNumero(campoForm, "peso");
    },
    false
  );

  document.getElementById("filtrarPrecioProducto").addEventListener(
    "click",
    function () {
      let campoForm =
        devolverDatosFormularioFiltrarProducto("formProductoPrecio");
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
      plantillaHtml.eliminarDivProductos();
      plantillaHtml.insertarFormularioCrearLista();
      eventoEnviarFormularioLista();
    },
    false
  );

  document.getElementById("listarListas").addEventListener(
    "click",
    function () {
      plantillaHtml.eliminarDivProductos();
      plantillaHtml.insertarTablaListas();
      funcionesFirebase.obtenerListas();
    },
    false
  );
}

/**
 *
 */
function eventoEnviarFormularioLista() {
  document.getElementById("botonCrearLista").addEventListener(
    "click",
    function () {
      datosLista = devolverDatosFormularioLista();
      plantillaHtml.eliminarFormularioCrearLista();
      plantillaHtml.insertarDivProductosLista();
      funcionesFirebase.eventoAnyadirProductos();
      anyadirEventoCrearLista();
    },
    false
  );
}
function anyadirEventoProducto(id) {
  document.getElementById(id).addEventListener(
    "click",
    function () {
      productosSeleccionados.push(id);
    },
    false
  );
}

/**
 *
 * @returns Devuelvo los datos del formulario.
 */
function devolverDatosFormularioLista() {
  let datos = [];
  let form = document.getElementById("formularioCrearLista");
  for (let i = 0; i < form.length - 1; i++) {
    datos.push(form[i].value);
  }
  return datos;
}

function anyadirEventoCrearLista() {
  document.getElementById("crearListaFirebase").addEventListener(
    "click",
    function () {
      funcionesFirebase.crearLista(datosLista, productosSeleccionados);
      funcionesFirebase.listarProductos();
    },
    false
  );
}

/**
 *
 * @param {Object} producto
 * @param {String} id
 */
function anyadirEventoEditarProductos(producto, id) {
  let productos = document.getElementById(id);
  productos.addEventListener(
    "click",
    function () {
      console.log("mundo");
    },
    false
  );
}

/**
 *
 * @param {String} idForm
 * @returns Devuelvo el valor por el cual el usuario quiere filtrar el producto.
 */
function devolverDatosFormularioFiltrarProducto(idForm) {
  let formulario = document.getElementById(idForm);

  return formulario[0].value;
}

/**
 *
 * @returns Devuelvo en un array los campos rellenados de la lista de la compra.
 */
function devolverDatosListaCompra() {
  let lista = document.getElementsByClassName("datosFormulario");
  let datosLista = [];
  for (let i = 0; i < lista.length; i++) {
    datosLista.push(lista[i].value);
  }
  return datosLista;
}

export {
  anyadirEventosBotones,
  devolverDatosListaCompra,
  anyadirEventoProducto,
  anyadirEventoEditarProductos,
};
