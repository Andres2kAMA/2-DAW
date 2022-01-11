"use strict";

async function obtenerProductos() {
  const productos = await getDocs(productosCollection);
  productos.docs.map((producto) => {
    console.log(producto.data());
  });
}
