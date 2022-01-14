let plantilaProducto = `<tr></tr>`;

function modificarPlantillaProducto(producto) {
  let plantillaDevolver = plantilaProducto.replace(
    `<tr></tr>`,
    `<tr class="producto"><td> ${producto.nombre}</td><td> ${producto.precio}</td><td> ${producto.peso}</td><td><img width="100px" height=100px" src="${producto.imagen}" /></td><td> ${producto.descripcion}</td></tr>`
  );
  return plantillaDevolver;
}

function imprimirProductos(producto) {
  let tabla = document.getElementById("tabla");
  let fila = modificarPlantillaProducto(producto);
  tabla.insertAdjacentHTML("beforeend", fila);
}

function eliminarDatosTabla() {
  let productos = document.getElementsByClassName("producto");
  for (let i = productos.length; i > 0; i--) {
    productos[0].parentNode.removeChild(productos[0]);
  }
}
export { imprimirProductos, eliminarDatosTabla };
