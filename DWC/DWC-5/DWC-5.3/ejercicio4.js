"use strict";

//Ejercicio 4 - Anagrama

window.onload = function () {
  /**
   *
   * @param {String} palabra
   * @returns Devuelve 'true' si la palabra enviada NO es una cadena vacía
   *          y NO es un número.
   */
  function esValida(palabra) {
    let regExp = /\s+/;
    if (palabra.replace(regExp, "").length != 0 && isNaN(palabra)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @returns Devielve un array de las dos palabras en:
   *                ->Minúscula.
   *                ->Sin ningún tipo de espacio.
   */
  function devolverPalabrasFormateadas() {
    let palabraUno = document.getElementById("palabraUno").value;
    let palabraDos = document.getElementById("palabraDos").value;

    if (esValida(palabraUno) && esValida(palabraDos)) {
      let palabrasValidas = [
        palabraUno.toLowerCase().trim().replaceAll(" ", ""),
        palabraDos.toLowerCase().trim().replaceAll(" ", ""),
      ];
      return palabrasValidas;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {String} palabra
   * @returns Devuelve la inversa de la palabra enviada.
   */
  function devolverPalabraInversa(palabra) {
    let palabraInversa = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabraInversa += palabra[i];
    }
    return palabraInversa;
  }

  /**
   * Limpia el formulario.
   */
  function limpiarFormulario() {
    document.getElementById("palabraUno").value = "";
    document.getElementById("palabraDos").value = "";
  }

  /**
   * FUNCIÓN PRINCIPAL
   */
  function comprobarAnagrama() {
    //Almaceno las palabras formateadas.
    let palabrasFormateadas = devolverPalabrasFormateadas();

    //Si SON válidas, entro en la condición.
    if (palabrasFormateadas != false) {
      //Almaceno las palabras en dos variables individuales para una mayor legibilidad.
      let palabraValidaUno = palabrasFormateadas[0];
      let palabraValidaDos = devolverPalabraInversa(palabrasFormateadas[1]);

      //Si anteriormente el usuario puso un formato equivocado de las palabras
      //elimino el error.
      if (document.getElementById("error") != null) {
        document
          .getElementsByTagName("body")[0]
          .removeChild(document.getElementById("error"));
      }

      /**
       * Creo la variable párrafo aviso:
       *    Si no estaba creada:
       *        ->Indico que es un párrafo.
       *        ->Le establezco un id.
       *    Si estaba creada:
       *        ->La recojo del html.
       */
      let parrafoAviso;
      if (document.getElementById("aviso") == null) {
        parrafoAviso = document.createElement("p");
        parrafoAviso.id = "aviso";
      } else {
        parrafoAviso = document.getElementById("aviso");
      }

      /**
       * Si son anagramas,al párrafo le indico:
       *    ->El texto indicando que son anagramas.
       *    ->Un id.
       *
       * Si no, al párrafo le indico:
       *    ->El texto indicando que NO son anagramas.
       *    ->Un id.
       */

      if (palabraValidaUno == palabraValidaDos) {
        parrafoAviso.innerHTML = "¡SON ANAGRAMAS!";
        parrafoAviso.className = "anagrama";
      } else {
        parrafoAviso.innerHTML = "No son anagramas :(";
        parrafoAviso.className = "noAnagrama";
      }

      //Añado el párrafo al html.
      document
        .getElementsByTagName("header")[0]
        .insertAdjacentElement("afterend", parrafoAviso);

      //Limpio el formulario.
      limpiarFormulario();
    } else {
      //Si anteriormente las palabras tenían el formato correcto elimino
      //el párrafo de aviso.
      if (document.getElementById("aviso") != null) {
        document
          .getElementsByTagName("body")[0]
          .removeChild(document.getElementById("aviso"));
      }

      //Si anteriormente las palabras tenían el formato correcto inserto el párrafo
      //de error.
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

  //Le añado un evento "click al botón".
  document.getElementById("enviar").addEventListener(
    "click",
    function () {
      comprobarAnagrama();
    },
    false
  );
};
