"use strict";
import * as funcionesFirebase from "./funciones_Firebase.js";
let plantilaProducto = "<li></li>";

function modificarPlantillaProducto(producto) {
  let plantillaDevolver = plantilaProducto.replace(
    `<li></li>`,
    `<li><p>Nombre: ${producto.nombre}</p><p>Precio: ${producto.precio}</p><p>Peso: ${producto.peso}</p><img src="${producto.imagen} /><p>Descripción: ${producto.descripción}</p></li>`
  );
  return plantillaDevolver;
}
function imprimirProductos(productos) {
  let plantilla = modificarPlantillaProducto(productos[0]);
  carrusel[0].insertAdjacentHTML("beforeend", plantilla);
}

export { imprimirProductos };
