"use strict";

//Me defino una plantilla con un tr.
let plantilaProducto = `<tr></tr>`;

/**
 *
 * @param {Object} producto
 * @returns Devuelvo la plantilla modificada.
 */
function modificarPlantillaProducto(producto) {
  let plantillaDevolver = plantilaProducto.replace(
    `<tr></tr>`,
    `<tr class="producto"><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td></tr>`
  );
  return plantillaDevolver;
}

/**
 * Imprimo el producto en la tabla.
 * @param {Object} producto
 */
function imprimirProducto(producto) {
  if (document.getElementById("noMostrar") != null)
    document.getElementById("noMostrar").id = "";

  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto);
  tabla.insertAdjacentHTML("beforeend", fila);
}

/**
 * Elimino todos los productos de la tabla.
 */
function eliminarDatosTabla() {
  if (document.getElementById("noMostrar") == null)
    document.getElementsByTagName("section")[0].id = "noMostrar";
  let productos = document.getElementsByClassName("producto");
  for (let i = productos.length; i > 0; i--) {
    productos[0].parentNode.parentNode.removeChild(productos[0].parentNode);
  }
}
export { imprimirProducto, eliminarDatosTabla };
