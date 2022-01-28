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
import * as funcionesHtml from "./funciones_Html.js";

function obtenerColecciónProductosFireBase() {
  const db = getFirestore(app);
  let productosCollection = collection(db, "productos");
  return productosCollection;
}

async function mostrarTodosProductos() {
  const productosCollection = obtenerColecciónProductosFireBase();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProducto(producto.data(), producto.id);
  });
}

async function mostrarProductosConConsulta(consulta) {
  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProducto(producto.data());
  });
}

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

  mostrarProductosConConsulta(consulta);
}

export { mostrarTodosProductos, ordenarProductos };
