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
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }
  const productosCollection = obtenerColecciónFireBase();
  const productos = await getDocs(productosCollection);
  productos.docs.map((producto) => {
    plantillas.imprimirProductos(producto.data());
  });
}

async function filtrarProductos() {
  const productosCollection = obtenerColecciónFireBase();
  filtrarFormulario(productosCollection);
}

function obtenerColecciónFireBase() {
  const db = getFirestore(app);
  return collection(db, "productos");
}

function filtrarFormulario(productosCollection) {
  let formulario = document.getElementById("form");
  for (let i = 0; i < formulario.length; i++) {
    if (i == 0) {
      if (formulario[i].value != "") {
        filtrarPorNombre(formulario[i].value, productosCollection);
        break;
      }
    } else {
      if (i == 1) {
        if (formulario[i].value != 0) {
          filtrarPorNumero(formulario[i].value, "precio", productosCollection);
          break;
        }
      } else {
        if (formulario[i].value != 0) {
          filtrarPorNumero(formulario[i].value, "peso", productosCollection);
          break;
        }
      }
    }
  }
}
/*
async function filtrarPorNombre(valor, productosCollection) {
  const consulta = await query(
    productosCollection,
    where("nombre", "array-contains-any", valor)
  );
  const productosFiltrados = await getDocs(consulta);
  productosFiltrados.docs.map((producto) => {
    console.log(producto.data());
  });
}
*/
async function filtrarPorNumero(valor, campo, productosCollection) {
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }

  const consulta = await query(
    productosCollection,
    where(campo, "<", parseInt(valor, 10))
  );

  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProductos(producto.data());
  });
}

async function ordenarProductos() {
  const productosCollection = await obtenerColecciónFireBase();
  var consulta;
  if (document.getElementsByClassName("producto") != null) {
    plantillas.eliminarDatosTabla();
  }
  console.log(document.getElementsByClassName("ascendente"));
  if (document.getElementsByClassName("ascendente").length != 0) {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "asc")
    );
    let boton = document.getElementById("ordenar");
    boton.innerHTML = "Ordernar descendentemente";
    boton.className = "descendente";
  } else {
    consulta = await query(
      productosCollection,
      where("precio", ">", 0),
      orderBy("precio", "desc")
    );

    let boton = document.getElementById("ordenar");
    boton.innerHTML = "Ordernar ascendentemente";
    boton.className = "ascendente";
  }

  const productosFiltrados = await getDocs(consulta);

  productosFiltrados.docs.map((producto) => {
    plantillas.imprimirProductos(producto.data());
  });
}
export { listarProductos, filtrarProductos, ordenarProductos };
