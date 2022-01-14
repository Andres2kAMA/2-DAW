"use strict";

//Importo las funciones que voy a utilizar del Firestore.
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//Importo la 'key' para acceder al Firebase.
import { app } from "./conexion_Firebase.js";

import * as plantillas from "./plantillasHtml.js";

/**
 * @returns Devuelvo la colección de Productos.
 */
function obtenerColecciónFireBase() {
  const db = getFirestore(app);
  let productosCollection = collection(db, "productos");
  return productosCollection;
}

/**
 * Imprimo TODOS los productos de la colección sin ningún tipo de filtro.
 */
async function listarProductos() {
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }

  const productosCollection = obtenerColecciónFireBase();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data());
  });
}

/**
 * @param {*} valor
 */
async function filtrarPorNombre(valor) {
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }

  const productosCollection = obtenerColecciónFireBase();

  const consulta = await query(
    productosCollection,
    where("nombre", "==", valor)
  );

  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data());
  });
}

/**
 * @param {*} valor
 * @param {string} campo
 */
async function filtrarPorNumero(valor, campo) {
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }

  const productosCollection = obtenerColecciónFireBase();

  const consulta = await query(
    productosCollection,
    where(campo, "<", parseInt(valor, 10))
  );

  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data());
  });
}

async function ordenarProductos() {
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }

  const productosCollection = obtenerColecciónFireBase();

  var consulta;

  if (document.getElementsByClassName("ascendente").length != 0) {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "asc")
    );

    let botonOrdenar = document.getElementById("ordenar");
    botonOrdenar.innerHTML = "Ordenar por precio descendente";
    botonOrdenar.className = "descendente";
  } else {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "desc")
    );

    let boton = document.getElementById("ordenar");
    boton.innerHTML = "Ordenar por precio ascendente";
    boton.className = "ascendente";
  }

  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data());
  });
}

export {
  listarProductos,
  ordenarProductos,
  filtrarPorNombre,
  filtrarPorNumero,
};
