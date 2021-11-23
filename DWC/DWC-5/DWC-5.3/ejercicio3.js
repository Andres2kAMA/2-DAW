"use strict";

//Ejercicio 3 - Discos

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
   *
   * @param {Object} datos
   * @returns Recorro el objeto y devuelvo:
   *            ->True: Si los datos son correctos.
   *            ->False: Si los datos son erróneos.
   */
  function datosCorrectos(datos) {
    for (const [clave, valor] of Object.entries(datos)) {
      if (valor == "") {
        return false;
      }
      if (
        (clave == "estanteria" && valor <= 0) ||
        (clave == "estanteria" && valor % 1 != 0)
      ) {
        return false;
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
   *
   * @param {Object} datos
   */
  function crearTablaConDatos(datos) {
    //Me creo un array con los nombres de los apartados.
    let apartados = [
      "Nombre del disco",
      "Grupo de música",
      "Año de publicación",
      "Tipo de música",
      "Número de estantería",
      "¿Prestado?",
    ];

    //Me almaceno el body.
    let body = document.getElementsByTagName("body")[0];

    //Me creo tanto la tabla como las filas.
    let tabla = document.createElement("table");
    let filaApartados = document.createElement("tr");
    let filaDatos = document.createElement("tr");

    /**
     * A la filaApartados le añado un th por cada apartado.
     */
    for (let i = 0; i < apartados.length; i++) {
      let th = document.createElement("th");
      th.innerText = apartados[i];
      filaApartados.appendChild(th);
    }

    /**
     * A  la filaDatos le añado todos los datos.
     */
    for (const [clave, valor] of Object.entries(datos)) {
      let td = document.createElement("td");
      td.innerText = valor;
      filaDatos.appendChild(td);
    }

    //Inserto la tabla al body.
    tabla.appendChild(filaApartados);
    tabla.appendChild(filaDatos);
    body.appendChild(tabla);
  }

  /**
   * Función PRINCIPAL del programa.
   */
  function guardarDatos() {
    //Obtengo los datos.
    let datosUsuario = obtenerDatos();

    //Si los datos son correctos, entro en la condicion.
    if (datosCorrectos(datosUsuario)) {
      //Me almaceno el body.
      let body = document.getElementsByTagName("body")[0];

      //Creo la tabla.
      crearTablaConDatos(datosUsuario);

      //Limpio el formulario.
      limpiarFormulario();

      //Si anteriormente los datos eran erróneos, elimino el error.
      if (document.getElementById("error") != null) {
        body.removeChild(document.getElementById("error"));
      }
    } else {
      //Si anteriormente los datos NO eran erróneos, inserto el error.
      if (document.getElementById("error") == null) {
        let header = document.getElementsByTagName("header")[0];
        let parrafoError = document.createElement("p");
        parrafoError.id = "error";
        parrafoError.innerText = "</3";
        header.insertAdjacentElement("afterend", parrafoError);
      }
    }
  }

  //Le pongo un evento "click" al input botón.
  document.getElementById("guardar").addEventListener(
    "click",
    function () {
      guardarDatos();
    },
    false
  );
};
