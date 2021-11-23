"use strict";

//Ejercicio 2 - Creando párrafos

window.onload = function () {
  /**
   *
   * @param {String} texto
   * @returns Devuelvo true si el usuario NO ha introducido una cadena de texto vacía.
   */
  function textoValido(texto) {
    let regExp = /\s+/;
    if (texto.replace(regExp, "").length != 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Función que creará un div con el texto del usuario.
   */
  function crearDiv() {
    //Me almaceno el body, el texto y la opción de estilo.
    let body = document.getElementsByTagName("body")[0];
    let textoUsuario = document.getElementsByTagName("textarea")[0].value;
    let opcionUsuario = document.getElementsByTagName("select")[0].value;

    //Si el texto es válido entro en la condicional.
    if (textoValido(textoUsuario)) {
      //Creo tanto un div como un párrafo.
      let div = document.createElement("div");
      let parrafo = document.createElement("p");

      //Le añado al párrafo el texto y el estilo.
      parrafo.innerHTML = textoUsuario;
      parrafo.id = opcionUsuario;

      //Añado el div al body.
      div.appendChild(parrafo);
      body.appendChild(div);

      //Si anteriormente, el usuario había introducido una cadena de texto errónea,
      //elimino el mensaje error.
      if (document.getElementById("error") != null) {
        body.removeChild(document.getElementById("error"));
      }

      //Elimino el texto del textarea.
      document.getElementsByTagName("textarea")[0].value = "";
    } else {
      //Si anteriormente NO se había introducido una cadena de texto errónea, creo un error y
      //lo añado justo después del header.
      if (document.getElementById("error") == null) {
        var parrafoError = document.createElement("p");
        parrafoError.id = "error";
        parrafoError.innerText = "</3";
        document
          .getElementsByTagName("header")[0]
          .insertAdjacentElement("afterend", parrafoError);
      }
    }
  }

  /**
   * Creo el botón con un evento "click" que llamará a la función 'crearDiv()'.
   */
  function crearBoton() {
    let body = document.getElementsByTagName("body")[0];
    let boton = document.createElement("button");
    boton.innerText = "Crear párrafo";
    boton.className = "colorBlanco";
    boton.addEventListener(
      "click",
      function () {
        crearDiv();
      },
      false
    );
    body.appendChild(document.createElement("br"));
    body.appendChild(boton);
  }

  /**
   * Creo el formulario.
   */
  function crearFormulario() {
    //Me almaceno el body.
    let body = document.getElementsByTagName("body")[0];

    /**
     * Creo:
     *  ->El formulario.
     *  ->El textarea.
     *  ->El select.
     */
    let formulario = document.createElement("form");
    let textarea = document.createElement("textarea");
    let select = document.createElement("select");

    //Tanto al textarea como al select le añado una clase.
    textarea.className = "colorBlanco";
    select.className = "colorBlanco";

    /**
     * Creo tres opciones.
     */
    let opcionUno = document.createElement("option");
    opcionUno.value = "opcionUno";
    opcionUno.innerText = "Opción 1";

    let opcionDos = document.createElement("option");
    opcionDos.value = "opcionDos";
    opcionDos.innerText = "Opción 2";

    let opcionTres = document.createElement("option");
    opcionTres.value = "opcionTres";
    opcionTres.innerText = "Opción 3";

    //Añado las opciones al select.
    select.appendChild(opcionUno);
    select.appendChild(opcionDos);
    select.appendChild(opcionTres);

    //Añado el formulario al body debidamnete formateado.
    formulario.appendChild(textarea);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(select);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    body.appendChild(formulario);

    //Creo el botón.
    crearBoton();
  }

  //Creo el formulario.
  crearFormulario();
};
