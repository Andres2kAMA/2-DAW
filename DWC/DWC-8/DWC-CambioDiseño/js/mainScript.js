"use strict";

//Hago los imports

import * as plantilla from "./plantillaHtml.js";
import * as funcionesHtml from "./funcionesHtml.js";

window.onload = function () {
  plantilla.insertarPlantillaHeaderInicio();
  plantilla.insertarPlantillaPresentacion();
  funcionesHtml.insertarEventosPrincipales();
};
