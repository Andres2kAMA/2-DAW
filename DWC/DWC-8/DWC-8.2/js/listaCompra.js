"use strict";

import * as plantillas from "./plantillasHtml.js";
import { app } from "./conexion_Firebase.js";
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

window.onload = () => {
  /**
   * Me conecto con la bbdd:
   *  ->Con 'getFirestore()' me conecto al Firebase.
   *  ->Con 'collection()' me conecto a la conexión de la bbdd.
   */
  const db = getFirestore(app);
  const productosCollection = collection(db, "productos");

  async function obtenerProductos() {
    const productos = await getDocs(productosCollection);
    productos.docs.map((producto) => {
      console.log(producto.data());
    });
  }

  obtenerProductos();
};
