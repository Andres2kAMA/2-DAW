"use strict";

import * as agenda from "./agenda.js";

window.onload = () => {
  agenda.anyadirFuncionesBotones();
  if (agenda.comprobarAgendaCreada()) {
    agenda.mostrarTodosUsuariosAgenda();
  }
};
