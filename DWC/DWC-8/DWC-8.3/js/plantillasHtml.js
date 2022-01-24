"use strict";

//Importo las funciones HTML que voy a utilizar.
import * as funcionesHTML from "./funcionesHtml.js";

//Me defino las plantillas necesarias.

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

let divAnyadirProductosLista = `<div id="tablaProductos">
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
                        <input type="button" value="Crear la lista" id="actualizarListaFirebase">
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
                              <form id="formularioLista">
                                <label>Nombre de la lista</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Nombre del propietario</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Fecha</label>
                                <input class="datosFormulario" type="date" value="" /><br /><br />
                                <input id="botonCrearLista" type="button" value="Crear" />
                              </form>
                           </div> `;

let divFormularioListaEditar = `<div id="divFormLista">
                              <h1>Inserta los valores de tu lista</h1>
                              <form id="formularioLista">
                                <label>Nombre de la lista</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Nombre del propietario</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Fecha</label>
                                <input class="datosFormulario" type="date" value="" /><br /><br />
                                <input id="botonEditarLista" type="button" value="Editar" />
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
 * @param {Object} lista
 * @param {String} id
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaLista(lista, id) {
  let plantillaDevolver = plantilaFila.replace(
    `<tr></tr>`,
    `<tr class="lista" id="${id}"><th> ${lista.nombrePropietario}</th><th> ${lista.nombreLista}</th><th> ${lista.fechaCreacion}</th><th><input type="button" id="${id}editar"  value="Editar valores lista" /><input type="button" id="${id}eliminar"  value="Eliminar lista" /></th><th><input type="button" id="${id}anyadir" value="Añadir productos" /></th></tr>`
  );
  return plantillaDevolver;
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 * @param {String} id
 */
function imprimirProducto(producto, id) {
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto, id);
  tabla.insertAdjacentHTML("beforeend", fila);
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 * @param {String} id
 */
function imprimirProductoLista(producto, id) {
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProductoLista(producto, id);
  tabla.insertAdjacentHTML("beforeend", fila);
}

/**
 * Elimino todo los datos del main.
 */
function eliminarDatosMain() {
  let hijos = body.childNodes;
  for (let i = 0; i < body.childNodes.length + 1; i++) {
    body.removeChild(hijos[0]);
  }
}

//Funciones para insertar las plantillas.
function insertarDivProductos() {
  body.insertAdjacentHTML("beforeend", divProductos);
}

function insertarDivProductosLista() {
  body.insertAdjacentHTML("beforeend", divProductosLista);
}

function insertarDivActualizarProductosLista() {
  body.insertAdjacentHTML("beforeend", divAnyadirProductosLista);
}

function insertarFormularioCrearLista() {
  body.insertAdjacentHTML("beforeend", divFormularioLista);
}
function insertarFormularioEditarLista() {
  body.insertAdjacentHTML("beforeend", divFormularioListaEditar);
}

function insertarTablaListas() {
  body.insertAdjacentHTML("beforeend", tablaLista);
}

/**
 *
 * @param {Object} lista
 * @param {String} id
 */
function imprimirLista(lista, id) {
  let tabla = document.getElementById("tablaListaCompra");
  let listaAnyadir = modificarPlantillaLista(lista, id);
  let filasProductos = anyadirProductos(lista);

  tabla.insertAdjacentHTML("beforeend", listaAnyadir);

  funcionesHTML.anyadirEventoEditarLista(id, `${id}editar`);
  funcionesHTML.anyadirEventoEliminarLista(id, `${id}eliminar`);
  funcionesHTML.anyadirEventoAnyadirProductos(id, `${id}anyadir`);

  for (let i = 0; i < filasProductos.length; i++) {
    tabla.insertAdjacentHTML("beforeend", filasProductos[i]);
  }
}

/**
 *
 * @param {Object} lista
 * @returns Devuelvo la fila con los datos de los productos.
 */
function anyadirProductos(lista) {
  let filasProductos = [];
  for (let i = 0; i < lista.productos.length; i++) {
    let filaProducto = modificarPlantillaProducto(
      lista.productos[i],
      lista.productos[i].nombre
    );
    filasProductos.push(filaProducto);
  }
  return filasProductos;
}

export {
  imprimirProducto,
  insertarDivProductos,
  insertarFormularioCrearLista,
  insertarTablaListas,
  imprimirLista,
  insertarDivProductosLista,
  imprimirProductoLista,
  insertarFormularioEditarLista,
  eliminarDatosMain,
  insertarDivActualizarProductosLista,
};
