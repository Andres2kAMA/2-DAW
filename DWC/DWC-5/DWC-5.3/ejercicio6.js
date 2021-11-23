"use strict";

//Ejercicio 6 - Discos II

window.onload = function () {
  /**
   *
   * @returns Devuelvo un objeto con todos los datos del usuario.
   */
  function obtenerDatos() {
    let datosUsuario = new Object();

    datosUsuario.nombreDisco = document
      .getElementById("nombreDisco")
      .value.trim();
    datosUsuario.grupo = document.getElementById("grupo").value.trim();
    datosUsuario.anyoPublicacion =
      document.getElementById("anyoPublicacion").value;
    datosUsuario.tipoMusica = document.getElementById("tipoMusica").value;
    datosUsuario.estanteria = document.getElementById("estanteria").value;

    if (document.getElementById("prestado").checked == true) {
      datosUsuario.prestado = "Sí";
    } else {
      datosUsuario.prestado = "No";
    }

    return datosUsuario;
  }

  /**
   *  Esta función validará los datos:
   *    Si el dato es erróneo:
   *      ->Le añado al campo una clase.
   *  Si el dato es correcto:
   *      ->Le quito al campo la clase.
   * @param {*} dato
   * @param {string} id
   * @param {ExpReg} expReg
   */
  function validarDatoIndividual(dato, id, expReg) {
    if (!expReg.test(dato)) {
      document.getElementById(id).className = "error";
    } else {
      document.getElementById(id).className = "";
    }
  }

  /**
   *
   * @param {Object} datos
   * @returns Recorro el objeto y dependiendo el dato, lo valido con una
   *          expresión regular.
   */
  function datosCorrectos(datos) {
    /**
     * Esta expresión indica que haya:
     *  ->Una 'E' mayúscula.
     *  ->Una 'S' mayúscula.
     *  ->Un  '-'.
     *  ->Tres números.
     *  ->Dos letras mayúsculas.
     */
    let expRegEstanteria = new RegExp("[E]{1}[S]{1}[-]{1}[0-9]{3}[A-Z]{2}$");
    let expRegAnyoPublicacion = new RegExp("[0-9]{4}");
    let expRegTexto = new RegExp("[A-Za-z0-0]{5,}");

    for (const [clave, valor] of Object.entries(datos)) {
      switch (clave) {
        case "nombreDisco":
        case "grupo":
          validarDatoIndividual(valor, clave, expRegTexto);
          break;

        case "anyoPublicacion":
          validarDatoIndividual(valor, clave, expRegAnyoPublicacion);
          break;

        case "estanteria":
          validarDatoIndividual(valor, clave, expRegEstanteria);
          break;

        default:
          if (valor == "") {
            document.getElementById(clave).className = "error";
          } else {
            document.getElementById(clave).className = "";
          }
      }
    }
    return true;
  }

  /**
   * Limpio el formulario.
   */
  function limpiarFormulario() {
    document.getElementById("nombreDisco").value = "";
    document.getElementById("grupo").value = "";
    document.getElementById("anyoPublicacion").value = "";
    document.getElementById("tipoMusica").value = "";
    document.getElementById("estanteria").value = "";
    document.getElementById("prestado").checked = false;
  }

  /**
   * Función PRINCIPAL del programa
   */
  function validarDatos() {
    //Obtengo los datos.
    let datosUsuario = obtenerDatos();

    //Si los datos son correctos, limpio el formulario.
    if (datosCorrectos(datosUsuario)) {
      limpiarFormulario();
    }
  }

  //Le pongo un evento "click" al input botón.
  document.getElementById("guardar").addEventListener(
    "click",
    function () {
      //Si el nombre del disco o el grupo está vacío, informo al usuario
      //imprimiendo un error por pantalla.
      if (
        document.getElementById("nombreDisco").value.trim() == "" ||
        document.getElementById("grupo").value.trim() == ""
      ) {
        if (document.getElementById("aviso") == null) {
          document.getElementById("nombreDisco").className = "error";
          document.getElementById("grupo").className = "error";
          let header = document.getElementsByTagName("header")[0];
          let parrafoAviso = document.createElement("p");
          parrafoAviso.id = "aviso";
          parrafoAviso.innerHTML =
            "Tanto el nombre del disco como el grupo de música/intérprete son campos obligatorios";
          header.appendChild(parrafoAviso);
        }
      } else {
        //Si se había avisado al usuario anteriormente, elimino el aviso.
        if (document.getElementById("aviso") != null) {
          document
            .getElementById("aviso")
            .parentNode.removeChild(document.getElementById("aviso"));
        }

        //Llamo a la función principal.
        validarDatos();
      }
    },
    false
  );
};
