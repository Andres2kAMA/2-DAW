"use strict";

//Me defino una plantilla con un tr.

let plantilaProducto = `<tr></tr>`;

let divProductos = `<div id="tablaProductos">
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
                        </form>
                      </div>`;

let formularioCrearLista = `  <form id="formularioCrearLista">
                                <label>Nombre de la lista</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Nombre del propietario</label>
                                <input class="datosFormulario" type="text" value="" /><br /><br />
                                <label>Fecha</label>
                                <input class="datosFormulario" type="date" value="" /><br /><br />
                                <input id="botonCrearLista" type="button" value="Crear" />
                              </form>`;

let body = document.getElementById("body");
/**
 *
 * @param {Object} producto
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaProducto(producto, id) {
  let plantillaDevolver = plantilaProducto.replace(
    `<tr></tr>`,
    `<tr class="producto"><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td><td><input type="checkbox" value="${id}"</input></td></tr>`
  );
  return plantillaDevolver;
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 */
function imprimirProducto(producto, id) {
  if (document.getElementById("noMostrar") != null)
    document.getElementById("noMostrar").id = "";

  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto, id);
  tabla.insertAdjacentHTML("beforeend", fila);
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
function eliminarDivProductos() {
  let divProductos = document.getElementById("tablaProductos");
  divProductos.parentNode.removeChild(divProductos);
}
function eliminarFormularioCrearLista() {
  let form = document.getElementById("formularioCrearLista");
  form.parentNode.removeChild(form);
}

function insertarDivProductos() {
  body.insertAdjacentHTML("beforeend", divProductos);
}
function insertarFormularioCrearLista() {
  body.insertAdjacentHTML("beforeend", formularioCrearLista);
}
export {
  imprimirProducto,
  eliminarDatosTabla,
  eliminarDivProductos,
  insertarDivProductos,
  insertarFormularioCrearLista,
  eliminarFormularioCrearLista,
};
