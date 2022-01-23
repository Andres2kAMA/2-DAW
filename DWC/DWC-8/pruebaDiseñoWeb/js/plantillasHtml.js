"use strict";

import * as funcionesHTML from "./funcionesHtml.js";
import * as funcionesFirebase from "./funciones_Firebase.js";
//Me defino una plantilla con un tr.

let plantilaFila = `<tr></tr>`;

let divProductosLista = `<div id="tablaProductos">
                        <form id="formProductos">
                          <table id="tabla">
                            <tr>
                              <th>Nombre</th>
                              <th>Precio</th>
                              <th>Peso</th>
                              <th>Imágen</th>
                              <th>Descripción</th>
                              <th>Añadir productos a la lista</th>
                            </tr>
                          </table>
                          <input type="button" value="Crear la lista" id="crearListaFirebase">
                        </form>
                      </div>`;

let divProductos = `<div id="tablaProductos">
                        <form id="formProductos">
                          <table id="tabla">
                            <tr>
                              <th>Nombre</th>
                              <th>Precio</th>
                              <th>Peso</th>
                              <th>Imágen</th>
                              <th>Descripción</th>
                            </tr>
                          </table>
                        </form>
                      </div>`;

let tablaLista = `<table id="tablaListaCompra"></table>`;

let divFormularioLista = `<div id="divFormLista">
                              <h1>Inserta los valores de tu lista</h1>
                              <form id="formularioCrearLista">
                                <label>Nombre de la lista</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Nombre del propietario</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Fecha</label>
                                <input class="datosFormulario" type="date" value="" /><br /><br />
                                <input id="botonCrearLista" type="button" value="Crear" />
                              </form>
                           </div> `;

let body = document.getElementById("contenidoPrincipal");

/**
 *
 * @param {Object} producto
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaProducto(producto) {
  let plantillaDevolver = plantilaFila.replace(
    `<tr></tr>`,
    `<tr class="producto"><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td></tr>`
  );
  return plantillaDevolver;
}

/**
 *
 * @param {Object} producto
 * @param {String} id
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaProductoLista(producto, id) {
  let plantillaDevolver = plantilaFila.replace(
    `<tr></tr>`,
    `<tr class="producto"><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td><td><input type="button" id="${id}" value="Añadir"</input></td></tr>`
  );
  return plantillaDevolver;
}

/**
 *
 * @param {*} lista
 * @param {*} id
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaLista(lista, id) {
  let plantillaDevolver = plantilaFila.replace(
    `<tr></tr>`,
    `<tr class="lista" id="${id}"><th> ${lista.nombrePropietario}</th><th> ${lista.nombreLista}</th><th> ${lista.fechaCreacion}</th><th><input type="button" value="Editar lista" /><input type="button" value="Añadir productos" /></th></tr>`
  );
  return plantillaDevolver;
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 */
function imprimirProducto(producto, id) {
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto, id);
  tabla.insertAdjacentHTML("beforeend", fila);
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 */
function imprimirProductoLista(producto, id) {
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProductoLista(producto, id);
  tabla.insertAdjacentHTML("beforeend", fila);
}

function eliminarDatosMain() {
  let hijos = body.childNodes;
  for (let i = 0; i < body.childNodes.length + 1; i++) {
    body.removeChild(hijos[0]);
  }
}

/**
 * Elimino el div productos.
 */
function eliminarDivProductos() {
  let divProductos = document.getElementById("tablaProductos");
  divProductos.parentNode.removeChild(divProductos);
}

/**
 * Elimino el formulario para crear las listas.
 */
function eliminarFormularioCrearLista() {
  let form = document.getElementById("divFormLista");
  form.parentNode.removeChild(form);
}

/**
 * Elimino todos los productos de la tabla.
 */
function eliminarDatosTabla() {
  let productos = document.getElementsByClassName("producto");
  for (let i = productos.length; i > 0; i--) {
    productos[0].parentNode.parentNode.removeChild(productos[0].parentNode);
  }
}

//Funciones para insertar las plantillas.
function insertarDivProductos() {
  body.insertAdjacentHTML("beforeend", divProductos);
}

//Funciones para insertar las plantillas.
function insertarDivProductosLista() {
  body.insertAdjacentHTML("beforeend", divProductosLista);
}

function insertarFormularioCrearLista() {
  body.insertAdjacentHTML("beforeend", divFormularioLista);
}

function insertarTablaListas() {
  body.insertAdjacentHTML("beforeend", tablaLista);
}

/**
 *
 * @param {Object} lista
 */
function imprimirLista(lista) {
  let tabla = document.getElementById("tablaListaCompra");
  let fila = modificarPlantillaLista(lista);
  let filasProductos = anyadirProductos(lista);

  tabla.insertAdjacentHTML("beforeend", fila);

  for (let i = 0; i < filasProductos.length; i++) {
    tabla.insertAdjacentHTML("beforeend", filasProductos[i]);
    funcionesHTML.anyadirEventoEditarProductos(
      filasProductos,
      lista.productos[i].nombre
    );
  }
}

/**
 *
 * @param {Object} lista
 * @returns
 */
function anyadirProductos(lista) {
  let filasProductos = [];
  for (let i = 0; i < lista.productos.length; i++) {
    let filaProducto = modificarPlantillaProductoLista(
      lista.productos[i],
      lista.productos[i].nombre
    );
    filasProductos.push(filaProducto);
  }
  return filasProductos;
}

export {
  imprimirProducto,
  eliminarDivProductos,
  insertarDivProductos,
  insertarFormularioCrearLista,
  eliminarFormularioCrearLista,
  insertarTablaListas,
  imprimirLista,
  eliminarDatosTabla,
  insertarDivProductosLista,
  imprimirProductoLista,
  eliminarDatosMain,
};
