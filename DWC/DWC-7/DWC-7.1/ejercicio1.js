"use strict";

/**
 * IMPORTS
 */
import * as swApi from "./sw.js";

window.onload = () => {
  const fichero = swApi.conectarmeConLaApi("https://swapi.dev/api/films");
  fichero.send();
};
