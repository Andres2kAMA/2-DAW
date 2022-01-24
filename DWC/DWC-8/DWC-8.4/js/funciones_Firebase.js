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

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

//Importo la 'key' para acceder al Firebase.
import { app, autentificacion } from "./conexion_Firebase.js";

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

/**
 * Ordeno los productos.
 */
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
 * @param {Array} productosId
 * @returns Devuelvo un array con los datos de los productos.
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

/**
 * Imprimo las listas.
 */
async function obtenerListas() {
  const listaCollection = obtenerColecciónListaFireBase();

  const listas = await getDocs(listaCollection);

  listas.docs.map((lista) => {
    plantillas.imprimirLista(lista.data(), lista.id);
  });
}

/**
 *
 * @param {Array} productos
 * @param {String} id
 */
async function aumentarProductosLista(productos, id) {
  const listaCollection = obtenerColecciónListaFireBase();
  const lista = await doc(listaCollection, id);
  let productosAnyadir = await obtenerProductos(productos);
  productosAnyadir.map((producto) => {
    actualizarLista(lista, producto);
  });

  plantillas.eliminarDatosMain();
  plantillas.insertarTablaListas();
  obtenerListas();
}

async function actualizarLista(lista, producto) {
  await updateDoc(lista, {
    productos: arrayUnion(producto),
  });
}

/**
  console.log(productosAnyadir);
 *
 * @param {String} id
 * @param {Array} datos
 */
async function editarLista(id, datos) {
  const listaCollection = obtenerColecciónListaFireBase();

  const listaRef = await doc(listaCollection, id);

  await updateDoc(listaRef, {
    nombreLista: datos[0],
    nombrePropietario: datos[1],
    fechaCreacion: datos[2],
  });
  plantillas.eliminarDatosMain();
  plantillas.insertarTablaListas();
  obtenerListas();
}

/**
 *
 * @param {String} id
 */
async function eliminarLista(id) {
  const listaCollection = obtenerColecciónListaFireBase();

  const listaRef = await doc(listaCollection, id);

  await deleteDoc(listaRef, id);

  plantillas.eliminarDatosMain();
  plantillas.insertarTablaListas();
  obtenerListas();
}

/**
 * Inserto un evento que utilizaré para añadir los productos.
 */
async function eventoAnyadirProductos() {
  const productosCollection = obtenerColecciónProductosFireBase();
  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    funcionesHtml.anyadirEventoProducto(producto.id);
  });
}

async function validarUsuario(correo, contraseña) {
  createUserWithEmailAndPassword(autentificacion, correo, contraseña)
    .then((userCredential) => {
      console.log("yes");
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
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
  editarLista,
  eliminarLista,
  aumentarProductosLista,
  validarUsuario,
};
