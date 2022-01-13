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
import { app } from "./conexion_Firebase.js";

import * as plantillas from "./plantillasHtml.js";

async function listarProductos() {
  const productosCollection = obtenerColecciónFireBase();
  const productos = await getDocs(productosCollection);
  productos.docs.map((producto) => {
    plantillas.imprimirProductos(producto.data());
  });
}

async function filtrarProductos() {
  const productosCollection = obtenerColecciónFireBase();
  const productos = await getDocs(productosCollection);
  filtrarFormulario();
}

function obtenerColecciónFireBase() {
  const db = getFirestore(app);
  return collection(db, "productos");
}

function filtrarFormulario() {
  let formulario = document.getElementById("form");
  for (let i = 0; i < formulario.length; i++) {
    if (i == 0) {
      if (formulario[i].value != "") {
        filtrarPorNombre(formulario[i].value);
      }
    } else {
      if (formulario[i].value != "-") {
        filtrarPorNumero(formulario[i].value, "precio");
      }
    }
  }
}

function filtrarPorNombre(valor) {}

function filtrarPorNumero(valor, tipoDeNumero) {}
export { listarProductos, filtrarProductos };
