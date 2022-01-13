"use strict";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

let listaProductos = [];

async function obtenerProductos(productosCollection) {
  const productos = await getDocs(productosCollection);

  await anyadirProductosArray(productos);
}

async function anyadirProductosArray(productos) {
  await productos.docs.map((producto) => {
    listaProductos.push(producto.data());
  });
  devolverProductos();
}

async function devolverProductos() {
  return listaProductos;
}
function imprimirProductos() {
  console.log(listaProductos);
}
export { obtenerProductos, imprimirProductos };
