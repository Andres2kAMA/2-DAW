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

import * as plantillas from "./plantillasHtml.js";

async function listarProductos(productosCollection) {
  const productos = await getDocs(productosCollection);
  productos.docs.map((producto) => {
    plantillas.imprimirProductos(producto.data());
  });
}

export { listarProductos };
