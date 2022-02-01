"use strict";

//Importo las funciones que voy a utilizar del Firestore.
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

//Importo la 'key' para acceder al Firebase.
import { app, autentificacion } from "./conexion_Firebase.js";

//Importo funciones de otros ficheros js.
import * as plantilla from "./plantilla_Html.js";
import * as funciones from "./funciones_Html.js";

const db = getFirestore(app);

/**       Obtener colecciones Firebase      */
/**
 *
 * @returns Devuelvo la colección de productos.
 */
function obtenerColecciónProductosFireBase() {
  let productosCollection = collection(db, "productos");
  return productosCollection;
}

function obtenerColeccionListasFireBase() {
  let listaCollection = collection(db, "listasCompra");
  return listaCollection;
}

/**       Productos      */
/**
 * Obtengo todos los productos del FireStore y los imprimo por pantalla.
 */
async function mostrarTodosProductos() {
  const productosCollection = obtenerColecciónProductosFireBase();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProducto(producto.data(), producto.id);
  });
}

/**
 * Obtengo todos los productos del FireStore que cumplan el filtro y los imprimo por pantalla.
 * @param {String} filtro
 */
async function mostrarProductosFiltrados(filtro) {
  const productosFiltrados = await getDocs(filtro);

  productosFiltrados.docs.map((producto) => {
    plantilla.imprimirProducto(producto.data());
  });
}

/**
 * Ordeno los productos por el precio de manera ascendente o descendente.
 */
async function ordenarProductos() {
  const productosCollection = obtenerColecciónProductosFireBase();

  var consulta = "";
  if (document.getElementsByClassName("ascendente").length != 0) {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "asc")
    );

    let liOrdenar = document.getElementById("ordenarProductos");
    liOrdenar.innerHTML = "Ordenar de manera descendente";
    liOrdenar.className = "descendente";
  } else {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "desc")
    );

    let liOrdenar = document.getElementById("ordenarProductos");
    liOrdenar.innerHTML = "Ordenar de manera ascendente";
    liOrdenar.className = "ascendente";
  }

  mostrarProductosFiltrados(consulta);
}

/**
 *
 * @param {String} valor
 */
async function filtrarProductosPorNombre(valor) {
  const productosCollection = obtenerColecciónProductosFireBase();

  const consulta = await query(
    productosCollection,
    where("nombre", "==", valor)
  );

  mostrarProductosFiltrados(consulta);
}

/**
 *
 * @param {String} valor
 * @param {String} campo
 */
async function filtrarProductosPorNumero(valor, campo) {
  const productosCollection = obtenerColecciónProductosFireBase();

  const consulta = await query(
    productosCollection,
    where(campo, "<", parseInt(valor, 10))
  );

  mostrarProductosFiltrados(consulta);
}

/**     Listas       */

async function mostrarTodasLasListas() {
  const listaCollection = obtenerColeccionListasFireBase();

  const listas = await getDocs(listaCollection);

  listas.docs.map((lista) => {
    plantilla.imprimirLista(lista.data(), lista.id);
    funciones.anyadirEventosLista(lista.id);
  });
}

async function anyadirLista(lista) {
  const listaCollection = obtenerColeccionListasFireBase();
  await addDoc(listaCollection, lista);
}

async function eliminarLista(id) {
  const listaCollection = obtenerColeccionListasFireBase();

  const listaRef = await doc(listaCollection, id);

  await deleteDoc(listaRef, id);
}

async function actualizarLista(datos, id) {
  const listaCollection = obtenerColeccionListasFireBase();

  const listaRef = await doc(listaCollection, id);

  await updateDoc(listaRef, {
    nombrePropietario: datos[0],
    nombreLista: datos[1],
    fechaCreacion: datos[2],
  });
}

export {
  mostrarTodosProductos,
  ordenarProductos,
  filtrarProductosPorNombre,
  filtrarProductosPorNumero,
  mostrarTodasLasListas,
  anyadirLista,
  actualizarLista,
  eliminarLista,
};
