"use strict";

//Ejercicio 7 - Generador de formularios

window.onload = function () {
  //Me almaceno el formulario
  let formulario = document.getElementsByTagName("form")[0];

  /**
   *
   * @param {String} texto
   * @returns Devuelvo la respuesta del usuario.
   */
  function preguntarUsuario(texto) {
    return prompt(texto);
  }

  /**
   * Inserto al final del formulario un elemento.
   * @param {form} formulario
   * @param {*} elemento
   */
  function anyadirElementoFormulario(formulario, elemento) {
    formulario.appendChild(elemento);
  }

  /**
   * Creo un input indicándole el tipo y el id.
   * @param {String} tipo
   * @param {int} id
   * @returns Devuelvo el input
   */
  function devolverInput(tipo, id) {
    let input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    return input;
  }

  /**
   *
   * @param {int} id
   * @returns Devuelvo true si el id es válido.
   */
  function idValido(id) {
    if (document.getElementById(id) != null || id == null) {
      return false;
    }
    return true;
  }

  /**
   *
   * @param {String} texto
   */
  function informarErrorUsuario(texto) {
    if (document.getElementById("error") == null) {
      let header = document.getElementsByTagName("header")[0];
      let p = document.createElement("p");
      p.innerHTML = texto;
      p.id = "error";
      header.insertAdjacentElement("afterend", p);
    } else {
      let p = document.getElementById("error");
      p.innerHTML = texto;
    }
  }

  /**
   * Elimino el mensaje de error.
   */
  function eliminarErrorUsuario() {
    if (document.getElementById("error") != null) {
      document
        .getElementById("error")
        .parentNode.removeChild(document.getElementById("error"));
    }
  }

  /**
   *
   * @param {int} id
   * @returns Devuelvo el text area indicándole que tenga 5 filas y 40 columnas.
   */
  function devolverTextarea(id) {
    let textarea = document.createElement("textarea");

    textarea.id = id;
    textarea.rows = 5;
    textarea.cols = 40;

    return textarea;
  }

  /**
   *
   * @param {int} id
   * @param {String} texto
   * @returns Devuelvo un label.
   */
  function devolverLabel(id, texto) {
    let label = document.createElement("label");

    label.setAttribute("for", id);
    label.innerHTML = texto;

    return label;
  }

  /**
   * Añado el label justo antes que el input.
   * @param {input} input
   * @param {*} elemento
   */
  function anyadirLabelInput(input, elemento) {
    input.insertAdjacentElement("beforebegin", elemento);
  }

  /**
   * Inserto un br
   * @param {form} formulario
   */
  function insertarSaltoLinea(formulario) {
    formulario.appendChild(document.createElement("br"));
  }

  /**
   *
   * @param {int} id
   * @param {src} ruta
   * @returns Devuelvo una imagen.
   */
  function devolverImagen(id, ruta) {
    let img = document.createElement("img");
    img.id = id;
    img.src = ruta;

    return img;
  }

  /**
   * Pregunto al usuario, y si introduce texto, creo el label.
   * @param {id} id
   * @returns
   */
  function devolverLabelInput(id) {
    let texto = preguntarUsuario("¿Cuál es el texto del label?");
    if (texto != null) return devolverLabel(id, texto + ":  ");
  }

  /**
   *
   * @param {int} id
   * @param {String} texto
   * @returns Devuelvo el botón.
   */
  function devolverBoton(id, texto) {
    let boton = document.createElement("button");
    boton.id = id;
    boton.innerHTML = texto;
    return boton;
  }

  /**
   * Función que crea un input.
   * @param {int} id
   * @param {String} tipo
   * @param {String} mensajeError
   */
  function crearInput(id, tipo, mensajeError) {
    if (idValido(id)) {
      eliminarErrorUsuario();
      let input = devolverInput(tipo, id);
      let label = devolverLabelInput(id);
      if (label != undefined) {
        anyadirElementoFormulario(formulario, input);
        anyadirLabelInput(input, label);
        insertarSaltoLinea(formulario);
      } else {
        informarErrorUsuario(mensajeError);
      }
    } else {
      informarErrorUsuario(mensajeError);
    }
  }

  /**
   * Función que crea un textArea.
   * @param {int} id
   * @param {String} mensajeError
   */
  function crearTextArea(id, mensajeError) {
    if (idValido(id)) {
      eliminarErrorUsuario();
      let textarea = devolverTextarea(id);
      let label = devolverLabelInput(id);
      if (label != undefined) {
        anyadirElementoFormulario(formulario, textarea);
        anyadirLabelInput(textarea, label);
        insertarSaltoLinea(formulario);
      } else {
        informarErrorUsuario(mensajeError);
      }
    } else {
      informarErrorUsuario(mensajeError);
    }
  }

  /**
   * Función que crea un label.
   * @param {int} id
   * @param {String} mensajeError1
   * @param {String} mensajeError2
   */
  function crearLabel(id, mensajeError1, mensajeError2) {
    if (idValido(id)) {
      eliminarErrorUsuario();
      let label = devolverLabelInput(id);
      if (label != undefined) {
        anyadirElementoFormulario(formulario, label);
        insertarSaltoLinea(formulario);
      } else {
        informarErrorUsuario(mensajeError1);
      }
    } else {
      informarErrorUsuario(mensajeError2);
    }
  }

  /**
   * Función que crea una img.
   * @param {int} id
   * @param {String} mensajeError
   */
  function crearImg(id, mensajeError) {
    if (idValido(id)) {
      let src = preguntarUsuario("¿Cuál es la ruta de la imagen?");
      eliminarErrorUsuario();
      let img = devolverImagen(id, src);
      anyadirElementoFormulario(formulario, img);
      insertarSaltoLinea(formulario);
    } else {
      informarErrorUsuario(mensajeError);
    }
  }

  /**
   * Función que crea un botón.
   * @param {int} id
   * @param {String} mensajeError
   */
  function crearBoton(id, mensajeError) {
    if (idValido(id)) {
      let texto = preguntarUsuario("¿Qué value le quieres añadir?");
      eliminarErrorUsuario();
      let boton = devolverBoton(id, texto);
      anyadirElementoFormulario(formulario, boton);
      insertarSaltoLinea(formulario);
    } else {
      informarErrorUsuario(mensajeError);
    }
  }

  /**
   * FUNCIÓN PRINCIPAL
   *
   * Asigno eventos a los botones de la tabla.
   */
  function asignarEventosBotones() {
    document.getElementById("texto").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el input?");
        crearInput(id, "text", "No se ha podido insertar el input texto");
      },
      false
    );

    document.getElementById("contrasenya").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el input?");
        crearInput(
          id,
          "password",
          "No se ha podido insertar el input contraseña"
        );
      },
      false
    );

    document.getElementById("textarea").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el textarea?");
        crearTextArea(id, "No se ha podido insertar el textarea");
      },
      false
    );

    document.getElementById("label").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el label?");
        crearLabel(
          id,
          "No se ha podido insertar el label",
          "El id al que unir el input NO se ha creado"
        );
      },
      false
    );

    document.getElementById("img").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene la imágen?");
        crearImg(id, "No se ha podido insertar la img");
      },
      false
    );

    document.getElementById("checkbox").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el input?");
        crearInput(
          id,
          "checkbox",
          "No se ha podido insertar el input checkbox"
        );
      },
      false
    );

    document.getElementById("radio").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el input?");
        crearInput(id, "radio", "No se ha podido insertar el input radio");
      },
      false
    );

    document.getElementById("br").addEventListener(
      "click",
      function () {
        insertarSaltoLinea(formulario);
      },
      false
    );

    document.getElementById("enviar").addEventListener(
      "click",
      function () {
        let id = preguntarUsuario("¿Qué ID tiene el botón submit");
        crearBoton(id, "No se ha podido insertar el botón");
      },
      false
    );
  }

  asignarEventosBotones();
};
