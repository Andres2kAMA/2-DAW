"use strict";

//Importo las funciones que voy a utilizar del Firestore.
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//Importo la 'key' para acceder al Firebase.
import { app } from "./conexion_Firebase.js";

//Importo funciones de otros ficheros js.
import * as plantillas from "./plantillasHtml.js";
import * as funcionesHtml from "./funcionesHtml.js";

/**
 * @returns Devuelvo la colección de Productos.
 */
function obtenerColecciónProductosFireBase() {
  const db = getFirestore(app);
  let productosCollection = collection(db, "productos");
  return productosCollection;
}

/**
 *
 * @returns Devuelvo la colección de Listas de la compra.
 */
function obtenerColecciónListaFireBase() {
  const db = getFirestore(app);
  let listaCollection = collection(db, "listaCompra");
  return listaCollection;
}

/**
 * Imprimo TODOS los productos de la colección sin ningún tipo de filtro.
 */
async function listarProductos() {
  plantillas.eliminarDatosMain();
  plantillas.insertarDivProductos();
  const productosCollection = obtenerColecciónProductosFireBase();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data(), producto.id);
  });
}

async function listarProductosLista() {
  const productosCollection = obtenerColecciónProductosFireBase();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantillas.imprimirProductoLista(producto.data(), producto.id);
  });
}

/**
 * @param {*} valor
 */
async function filtrarPorNombre(valor) {
  plantillas.eliminarDatosMain();
  plantillas.insertarDivProductos();

  const productosCollection = obtenerColecciónProductosFireBase();

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
  plantillas.eliminarDatosMain();
  plantillas.insertarDivProductos();
  const productosCollection = obtenerColecciónProductosFireBase();

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
  plantillas.eliminarDatosMain();
  plantillas.insertarDivProductos();

  const productosCollection = obtenerColecciónProductosFireBase();

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

/**
 *
 * @param {*} datosForm
 * @param {*} productos
 */
async function crearLista(datosForm, productos) {
  const listaCollection = obtenerColecciónListaFireBase();

  let productosLista = await obtenerProductos(productos);

  const nuevaLista = {
    nombreLista: datosForm[0],
    nombrePropietario: datosForm[1],
    fechaCreacion: datosForm[2],
    productos: productosLista,
  };
  await addDoc(listaCollection, nuevaLista);
}
/**
 *
 * @param {*} productosId
 * @returns
 */
async function obtenerProductos(productosId) {
  const productosCollection = obtenerColecciónProductosFireBase();
  let productosObtenidos = [];
  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    for (let i = 0; i < productosId.length; i++) {
      if (producto.id == productosId[i]) {
        productosObtenidos.push(producto.data());
      }
    }
  });
  return productosObtenidos;
}

async function obtenerListas() {
  const listaCollection = obtenerColecciónListaFireBase();

  const listas = await getDocs(listaCollection);

  listas.docs.map((lista) => {
    plantillas.imprimirLista(lista.data(), lista.id);
  });
}

async function eventoAnyadirProductos() {
  const productosCollection = obtenerColecciónProductosFireBase();
  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    funcionesHtml.anyadirEventoProducto(producto.id);
  });
}

export {
  listarProductos,
  listarProductosLista,
  ordenarProductos,
  filtrarPorNombre,
  filtrarPorNumero,
  crearLista,
  obtenerListas,
  eventoAnyadirProductos,
};
