"use strict";

//Hago los imports

import * as plantilla from "./plantilla_Html.js";
import * as funcionesHtml from "./funciones_Html.js";

window.onload = function () {
  plantilla.insertarPlantillaHeaderInicio();
  plantilla.insertarPlantillaPresentacion();
  funcionesHtml.declararEventosInicio();
};
