"use strict";

import { app } from "./conexion_Firebase.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import * as funcionesFirebase from "./funciones_Firebase.js";

function anyadirEventosBotones() {
  document.getElementById("listar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();
      const productosCollection = obtenerColecciónFireBase();
      funcionesFirebase.listarProductos(productosCollection);
      this.className = "desabilitado";
    },
    false
  );
  document.getElementById("filtrar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();
      const productosCollection = obtenerColecciónFireBase();
    },
    false
  );
  document.getElementById("ordenar").addEventListener(
    "click",
    function () {
      ponerFuncionalidadBotones();
      const productosCollection = obtenerColecciónFireBase();
    },
    false
  );
}

function ponerFuncionalidadBotones() {
  let botones = document.getElementsByTagName("button");
  for (let i = 0; i < botones.length; i++) {
    botones.className = "";
  }
}

function obtenerColecciónFireBase() {
  const db = getFirestore(app);
  return collection(db, "productos");
}

export { anyadirEventosBotones };
