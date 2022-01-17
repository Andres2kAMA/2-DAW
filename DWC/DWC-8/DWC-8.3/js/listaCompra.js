"use strict";

import * as funcionesBasicas from "./funcionesHtml.js";
import * as funcionesFirebase from "./funciones_Firebase.js";

window.onload = () => {
  /**
   * Me conecto con la bbdd:
   *  ->Con 'getFirestore()' me conecto al Firebase.
   *  ->Con 'collection()' me conecto a la conexión de la bbdd.
   */

  //Añado los eventos principales de la app.
  funcionesBasicas.anyadirEventosBotones();
  funcionesFirebase.listarProductos();
};
