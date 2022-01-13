"use strict";

import * as plantillas from "./plantillasHtml.js";
import { app } from "./conexion_Firebase.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import * as funcionesFirebase from "./funciones_Firebase.js";

window.onload = () => {
  /**
   * Me conecto con la bbdd:
   *  ->Con 'getFirestore()' me conecto al Firebase.
   *  ->Con 'collection()' me conecto a la conexión de la bbdd.
   */
  const db = getFirestore(app);
  const productosCollection = collection(db, "productos");

  let productos = funcionesFirebase.obtenerProductos(productosCollection);

  plantillas.imprimirProductos(productos);
};
