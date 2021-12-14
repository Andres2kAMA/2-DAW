"use strict";

/**
 * IMPORTS
 */
import * as swApi from "./sw.js";

window.onload = () => {
  const fichero = swApi.conectarmeConLaApi("https://swapi.py4e.com/api/films");
  fichero.send();
};
