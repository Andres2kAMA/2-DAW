"use strict";
import * as funcionesFirebase from "./funciones_Firebase.js";

let plantilaProducto = `<tr></tr>`;

function modificarPlantillaProducto(producto) {
  let plantillaDevolver = plantilaProducto.replace(
    `<tr></tr>`,
    `<tr><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td></tr>`
  );
  return plantillaDevolver;
}

function imprimirProductos(producto) {
  console.log(producto.imagen);
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto);
  tabla.insertAdjacentHTML("beforeend", fila);
}

export { imprimirProductos };
