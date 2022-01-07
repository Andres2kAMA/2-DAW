"use strict";

//Importo las funciones de la plantilla.
import * as plantilla from "./plantilaHTML.js";

//Me creo una variable para crear un "atajo" del localStorage.
const db = localStorage;

/**
 *
 * @returns Devuelvo el nombre del formulario.
 */
function getNombreFormulario() {
  let datosFormulario = document.getElementsByTagName("input");
  return datosFormulario[0].value;
}

/**
 *
 * @returns Devuelvo el apellido del formulario.
 */
function getApellidosFormulario() {
  let datosFormulario = document.getElementsByTagName("input");
  return datosFormulario[1].value;
}

/**
 *
 * @returns Devuelvo la dirección del formulario.
 */
function getDireccionFormulario() {
  let datosFormulario = document.getElementsByTagName("input");
  return datosFormulario[2].value;
}

/**
 *
 * @returns Devuelvo el teléfono del formulario.
 */
function getTelefonoFormulario() {
  let datosFormulario = document.getElementsByTagName("input");
  return datosFormulario[3].value;
}

/**
 * Me almaceno en una variable todos los usuarios y los muestro en el HTML.
 */
function mostrarTodosUsuariosAgenda() {
  let usuarios = JSON.parse(db.getItem("usuarios"));
  plantilla.anyadirTodosUsuarios(usuarios);
}

/**
 * Almaceno un objeto 'usuarios' en el localStorage.
 * @param {Object} usuario
 */
function crearAgenda(usuario) {
  db.setItem("usuarios", JSON.stringify(usuario));
}

/**
 *
 * @returns Devuelvo true si la agenda está creada.
 */
function comprobarAgendaCreada() {
  if (db.getItem("usuarios") == null) {
    return false;
  }
  return true;
}

/**
 *
 * @param {Array} datosFormulario
 * @returns Devuelvo true si el nombre o el apellido del formulario es válido.
 */
function comprobarNombreApellidoFormulario(nombre) {
  let expresionRegNombre = new RegExp("[A-Za-z]{1,}");

  if (!expresionRegNombre.test(nombre) || nombre == "") {
    return false;
  }
  return true;
}

/**
 *
 * @param {String} direccion
 * @returns Devuelvo true si ha introducido la dirección.
 */
function comprobarDireccionFormulario(direccion) {
  if (direccion == "") {
    return false;
  }
  return true;
}

/**
 *
 * @param {int} telef
 * @returns Devuelvo true si el número de teléfono NO está duplicado y además es válido.
 */
function comprobarTelefonoFormulario(telef) {
  let expresionRegTel = new RegExp("[0-9]{9}$");

  if (comprobarAgendaCreada()) {
    let usuarios = JSON.parse(db.getItem("usuarios"));
    let numerosTelefDuplicados = usuarios.filter(comprobarTelefonoDuplicado);

    if (numerosTelefDuplicados.length != 0) {
      return false;
    } else {
      if (!expresionRegTel.test(telef) || telef == "") {
        return false;
      }
    }
  } else {
    if (!expresionRegTel.test(telef) || telef == "") {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Object} usuario
 * @returns Devuelvo el usuario si el teléfono introducido en el formulario ya está almacenado en la agenda.
 */
function comprobarTelefonoDuplicado(usuario) {
  let telefono = getTelefonoFormulario();
  if (telefono == usuario.Teléfono) return usuario;
}

/**
 * Añado un evento 'click' que eliminará del array el usuario seleccionado.
 * @param {Object} usuario
 */
function eliminarUsuario(usuario) {
  let usuarioAEliminar = document.getElementById(`+34${usuario.Teléfono}`);

  usuarioAEliminar.addEventListener(
    "click",
    function (e) {
      //Me almaceno el id del usuario.
      let id = e.target.id.substr(3);

      //Me almaceno los usuarios.
      let usuarios = JSON.parse(db.getItem("usuarios"));

      for (let i = 0; i < usuarios.length; i++) {
        //Si el id coincide elimino al usuario tanto del localStorage como del HTML.
        if (usuarios[i].Teléfono == id) {
          usuarios.splice(i, 1);
          plantilla.eliminarUsuarioHtml(id);
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
      }
    },
    false
  );
}

/**
 * Muestro todos los usuarios de la agenda.
 */
function listarUsuarios() {
  plantilla.mostrarTodosUsuariosAgenda();
}

/**
 * Busco los usuarios mediante el NOMBRE y oculto a los usuarios que no tengan el mismo nombre.
 */
function buscarUsuarios() {
  let usuarios = JSON.parse(db.getItem("usuarios"));
  let usuariosEncontrados = usuarios.filter(comprobarNombre);

  if (usuariosEncontrados.length != 0) {
    plantilla.ocultarUsuariosHtml(usuarios, usuariosEncontrados);
  }
}

/**
 *
 * @param {Object} usuario
 * @returns Devuelvo el usuario si el nombre del formulario coincide con algún nombre de algún usuario de la agenda.
 */
function comprobarNombre(usuario) {
  let nombreABuscar = getNombreFormulario();
  if (nombreABuscar == usuario.Nombre) return usuario;
}

/**
 * Añado un usuario en la agenda.
 */
function anyadirUsuarios() {
  //Si los datos del formulario son correctos y la agenda está creada.
  if (
    comprobarNombreApellidoFormulario(getNombreFormulario()) &&
    comprobarNombreApellidoFormulario(getApellidosFormulario()) &&
    comprobarDireccionFormulario(getDireccionFormulario()) &&
    comprobarTelefonoFormulario(getTelefonoFormulario()) &&
    comprobarAgendaCreada()
  ) {
    let usuarios = JSON.parse(db.getItem("usuarios"));

    //Me creo un objeto con los datos del usuario.
    let nuevoUsuario = {
      Nombre: getNombreFormulario(),
      Apellidos: getApellidosFormulario(),
      Dirección: getDireccionFormulario(),
      Teléfono: getTelefonoFormulario(),
    };

    //Añado el usuario al array.
    usuarios.push(nuevoUsuario);

    //Actualizo el objeto usuarios del localStorage.
    db.setItem("usuarios", JSON.stringify(usuarios));

    //Muestro el usuario en el HTML.
    plantilla.anyadirUsuarioHtml(nuevoUsuario);

    //Añado el evento para eliminar el usuario.
    eliminarUsuario(nuevoUsuario);

    //Elimino el error si lo hubiese.
    plantilla.eliminarError();

    //Si no está creada la agenda
  } else if (!comprobarAgendaCreada()) {
    //Me creo un objeto con los datos del usuario.
    let nuevoUsuario = {
      Nombre: getNombreFormulario(),
      Apellidos: getApellidosFormulario(),
      Dirección: getDireccionFormulario(),
      Teléfono: getTelefonoFormulario(),
    };

    //Me creo un objeto 'usuarios'.
    let usuarios = [nuevoUsuario];

    //Creo la agenda.
    crearAgenda(usuarios);

    //Muestro el usuario en el HTML.
    plantilla.anyadirUsuarioHtml(nuevoUsuario);

    //Añado el evento para eliminar el usuario.
    eliminarUsuario(nuevoUsuario);

    //Elimino el error si lo hubiese.
    plantilla.eliminarError();
  } else {
    //Muestro el error.
    plantilla.mostrarError();
  }
}

/**
 *
 * @param {String} idBoton
 * @param {Function} nombreFuncion
 */
function anyadirFuncionBotonAgenda(idBoton, nombreFuncion) {
  document.getElementById(idBoton).addEventListener(
    "click",
    function () {
      `${nombreFuncion()}`;
    },
    false
  );
}

/**
 * Llamo a la función que añadira funciones "click" a los botones de la agenda.
 */
function anyadirFuncionesBotones() {
  anyadirFuncionBotonAgenda("botonAnyadir", anyadirUsuarios);
  anyadirFuncionBotonAgenda("botonBuscar", buscarUsuarios);
  anyadirFuncionBotonAgenda("botonListar", listarUsuarios);
}

export {
  anyadirFuncionesBotones,
  comprobarAgendaCreada,
  mostrarTodosUsuariosAgenda,
  eliminarUsuario,
};
