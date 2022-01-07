"use strict";
import * as agenda from "./agenda.js";

/**
 * Me creo las 3 plantillas que voy a utilizar.
 */
let plantillaNuevoUsuario = "<tr><td>Usuario</td></tr>";
let plantillaError =
  "<div id='errorFormulario'><h3 class='error'>Introduce los datos corréctamente</h3></div>";
let plantillaImg = "<img>";

/**
 *
 * @param {Object} usuario
 * @returns Devuelvo la plantilla con los datos del usuario.
 */
function devolverPlantillaNuevoUsuarioModificada(usuario) {
  let imgAAnyadir = devolverPlantillaImgModificada(usuario);
  let plantillaDevolver = plantillaNuevoUsuario.replace(
    `<tr><td>Usuario</td></tr>`,
    `<tr id='${usuario.Teléfono}'><td>${usuario.Nombre}</td><td>${usuario.Apellidos}</td><td>${usuario.Dirección}</td><td>${usuario.Teléfono}</td><td>${imgAAnyadir}</td></tr>`
  );
  return plantillaDevolver;
}

/**
 *
 * @param {Object} usuario
 * @returns Devuelvo la plantilla de la img con el id del usuario.
 */
function devolverPlantillaImgModificada(usuario) {
  let plantillaDevolver = plantillaImg.replace(
    `<img>`,
    `<img id=+34${usuario.Teléfono} class='imgCruz' src='../img/cruz.png' width="20" height="20">`
  );
  return plantillaDevolver;
}

/**
 * Inserto un usuario en la tabla HTML.
 * @param {Object} usuario
 */
function anyadirUsuarioHtml(usuario) {
  let tabla = document.getElementById("tablaUsuario");
  let usuarioAAnyadir = devolverPlantillaNuevoUsuarioModificada(usuario);

  tabla.insertAdjacentHTML("beforeend", usuarioAAnyadir);
}

/**
 * Elimino un usuario de la tabla.
 * @param {String} id
 */
function eliminarUsuarioHtml(id) {
  let fila = document.getElementById(id);
  fila.remove();
}

/**
 * Esta función se ejecutará sólamente al iniciarse el programa. Su función es añadir todos los usuarios al HTML dándole un evento a la img.
 * @param {Array} usuarios
 */
function anyadirTodosUsuarios(usuarios) {
  let tabla = document.getElementById("tablaUsuario");
  for (let i = 0; i < usuarios.length; i++) {
    let usuarioAAnyadir = devolverPlantillaNuevoUsuarioModificada(usuarios[i]);
    tabla.insertAdjacentHTML("beforeend", usuarioAAnyadir);
    agenda.eliminarUsuario(usuarios[i]);
  }
}

/**
 * Muestro el error en el HTML.
 */
function mostrarError() {
  let error = plantillaError;
  if (document.getElementById("errorFormulario") == null) {
    document.getElementById("body").insertAdjacentHTML("afterbegin", error);
  }
}

/**
 * Elimino el error del HTML.
 */
function eliminarError() {
  if (document.getElementById("errorFormulario") != null) {
    document
      .getElementById("body")
      .removeChild(document.getElementById("errorFormulario"));
  }
}

/**
 * Elimino la clase que oculta todos los personajes.
 */
function mostrarTodosUsuariosAgenda() {
  let usuariosOcultados = document.getElementsByClassName("ocultarUsuarios");
  for (let i = usuariosOcultados.length; i > 0; i--) {
    usuariosOcultados[0].className = "";
  }
}

/**
 * Oculto a ciertos usuarios.
 * @param {Array} usuarios
 * @param {Object} usuariosNoOcultar
 */
function ocultarUsuariosHtml(usuarios, usuariosNoOcultar) {
  let nombreABuscar = usuariosNoOcultar[0].Nombre;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].Nombre != nombreABuscar) {
      let usuarioAOcultar = document.getElementById(usuarios[i].Teléfono);
      usuarioAOcultar.className = "ocultarUsuarios";
    }
  }
}

export {
  anyadirUsuarioHtml,
  anyadirTodosUsuarios,
  ocultarUsuariosHtml,
  mostrarTodosUsuariosAgenda,
  mostrarError,
  eliminarError,
  eliminarUsuarioHtml,
};
