"use strict";

//Ejercicio 1 - Más números

window.onload = function () {
  /**
   *
   * @returns Devuelve un número aleatorio entre 0 y 100.
   */
  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 101);
  }

  /**
   * Si el valor introducido por parámetro:
   *    ->Es "true", marco todos los checkboxes.
   *    ->Es "false", desmarco todos los checkboxes.
   *
   * @param {boolean} valor
   */
  function marcarDesmarcar(valor) {
    let checkboxes = document.getElementsByTagName("input");

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = valor;
    }
  }

  /**
   * Creo y añado tanto los 100 inputs como los 100 labels.
   */
  function crearElementosCheckbox() {
    let body = document.getElementsByTagName("body")[0];
    let formulario = document.createElement("form");

    for (let i = 0; i < 100; i++) {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = i;

      let label = document.createElement("label");
      label.setAttribute("for", i);
      label.innerHTML = generarNumeroAleatorio();

      formulario.appendChild(label);
      formulario.appendChild(checkbox);
    }
    body.appendChild(formulario);
  }

  /**
   * Creo los dos botones y le añado un evento "click" a cada uno.
   */
  function crearBotones() {
    let body = document.getElementsByTagName("body")[0];
    let botonMarcar = document.createElement("button");
    let botonDesmarcar = document.createElement("button");

    botonMarcar.innerHTML = "Marcar todos";
    botonDesmarcar.innerHTML = "Desmarcar todos";

    body.appendChild(botonMarcar);
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
    body.appendChild(botonDesmarcar);

    botonMarcar.addEventListener(
      "click",
      function () {
        marcarDesmarcar(true);
      },
      false
    );

    botonDesmarcar.addEventListener(
      "click",
      function () {
        marcarDesmarcar(false);
      },
      false
    );
  }

  //Llamo a las 2 funciones.
  crearElementosCheckbox();
  crearBotones();

  /** FUNCIONES ADICIONALES */

  /**
   * Esta función pondrá eventos a los labels.
   */
  function ponerEventosLabel() {
    let label = document.getElementsByTagName("label");
    let checkboxes = document.getElementsByTagName("input");
    for (let i = 0; i < checkboxes.length; i++) {
      /**
       * Cuando el ratón pasa por encima se añadirá una clase
       * al label pertinente que le dará estilo.
       */
      checkboxes[i].addEventListener(
        "mouseover",
        function () {
          label[i].className = "marcarLabel";
        },
        false
      );

      /**
       * Cuando el ratón se quita del checkbox se quitará la clase.
       */
      checkboxes[i].addEventListener(
        "mouseleave",
        function () {
          label[i].className = "";
        },
        false
      );
    }
  }

  //Llamo a la función.
  ponerEventosLabel();
};
