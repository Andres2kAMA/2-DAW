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
      plantillaHtml.eliminarDatosMain();
      plantillaHtml.insertarFormularioCrearLista();
      eventoEnviarFormularioLista();
    },
    false
  );

  document.getElementById("listarListas").addEventListener(
    "click",
    function () {
      plantillaHtml.eliminarDatosMain();
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
      funcionesFirebase.listarProductosLista();
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

function anyadirEventoEditarLista(id, idHTML) {
  document.getElementById(idHTML).addEventListener(
    "click",
    function () {
      plantillaHtml.eliminarDatosMain();
      plantillaHtml.insertarFormularioEditarLista();
      editarValoresLista(id);
    },
    false
  );
}

function editarValoresLista(id) {
  document.getElementById("botonEditarLista").addEventListener(
    "click",
    function () {
      datosLista = devolverDatosFormularioLista();
      funcionesFirebase.editarLista(id, datosLista);
    },
    false
  );
}

function anyadirEventoEliminarLista(id, idHTML) {
  document.getElementById(idHTML).addEventListener(
    "click",
    function () {
      funcionesFirebase.eliminarLista(id);
    },
    false
  );
}

function anyadirEventoAnyadirProductos(id, idHTML) {
  document.getElementById(idHTML).addEventListener(
    "click",
    function () {
      plantillaHtml.eliminarDatosMain();
      plantillaHtml.insertarDivActualizarProductosLista();
      funcionesFirebase.listarProductosLista();
      funcionesFirebase.eventoAnyadirProductos();
      document.getElementById("actualizarListaFirebase").addEventListener(
        "click",
        function () {
          funcionesFirebase.aumentarProductosLista(productosSeleccionados, id);
        },
        false
      );
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
  let form = document.getElementById("formularioLista");
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
      productosSeleccionados = [];
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
  anyadirEventoEditarLista,
  anyadirEventoEliminarLista,
  anyadirEventoProducto,
  anyadirEventoAnyadirProductos,
};
