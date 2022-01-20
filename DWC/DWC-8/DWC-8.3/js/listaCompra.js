"use strict";

import * as funcionesBasicas from "./funcionesHtml.js";
import * as funcionesFirebase from "./funciones_Firebase.js";
import * as plantillaHtml from "./plantillasHtml.js";

window.onload = () => {
  /**
   * Me conecto con la bbdd:
   *  ->Con 'getFirestore()' me conecto al Firebase.
   *  ->Con 'collection()' me conecto a la conexión de la bbdd.
   */

  //Añado los eventos principales de la app.
  plantillaHtml.insertarDivProductos();
  funcionesBasicas.anyadirEventosBotones();
  funcionesFirebase.listarProductos();
};
