"use strict";

//Ejercicio 5 - Pueblos

window.onload = function () {
  //Me creo los tres arrays con las poblaciones para seleccionar dependiendo de la provincia.
  let poblacionAlicante = ["Alicante", "Elche", "Petrer"];
  let poblacionCastellon = ["Castellon", "Oropesa", "Vinaroz"];
  let poblacionValencia = ["Valencia", "Xàtiva", "Torrent"];

  /**
   * Creo dinámicamente tanto el select población como el botón para enviar los datos.
   */
  function crearFormularioDinamico() {
    let selectPoblacion = document.createElement("select");
    selectPoblacion.id = "poblacion";

    let labelPoblacion = document.createElement("label");
    labelPoblacion.innerHTML = "Población: ";

    document.getElementsByTagName("form")[0].appendChild(labelPoblacion);
    document.getElementsByTagName("form")[0].appendChild(selectPoblacion);

    let inputBoton = document.createElement("input");
    inputBoton.type = "button";
    inputBoton.id = "enviar";
    inputBoton.value = "¡ENVIAR!";

    //Este bucle añadirá al html dos saltos de línea.
    for (let i = 0; i < 2; i++) {
      document
        .getElementsByTagName("form")[0]
        .appendChild(document.createElement("br"));
    }

    document.getElementsByTagName("form")[0].appendChild(inputBoton);
    //Este bucle añadirá al html dos saltos de línea.
    for (let i = 0; i < 2; i++) {
      document
        .getElementsByTagName("form")[0]
        .appendChild(document.createElement("br"));
    }
  }

  /**
   * Esta función éliminará todas las opciones del select población.
   * @param {Select} selectPoblacion
   */
  function limpiarSelectPoblacion(selectPoblacion) {
    while (selectPoblacion.hasChildNodes()) {
      selectPoblacion.removeChild(selectPoblacion.options[0]);
    }
  }

  /**
   * Esta función añadirá al select poblaciones todas las definidas en el array 'poblaciones'.
   * @param {Select} selectPoblacion
   * @param {String} provincias
   */
  function anyadirOpcionesSelect(selectPoblacion, provincias) {
    switch (provincias) {
      case "Alicante":
        for (let i = 0; i < poblacionAlicante.length; i++) {
          let option = document.createElement("option");
          option.innerHTML = poblacionAlicante[i];
          selectPoblacion.appendChild(option);
        }
        break;
      case "Castellón":
        for (let i = 0; i < poblacionCastellon.length; i++) {
          let option = document.createElement("option");
          option.innerHTML = poblacionCastellon[i];
          selectPoblacion.appendChild(option);
        }
        break;
      case "Valencia":
        for (let i = 0; i < poblacionValencia.length; i++) {
          let option = document.createElement("option");
          option.innerHTML = poblacionValencia[i];
          selectPoblacion.appendChild(option);
        }
        break;
    }
  }

  /**
   * FUNCION PRINCIPAL
   * @param {String} provincia
   */
  function cambiarPoblacion(provincia) {
    let selectPoblacion = document.getElementById("poblacion");
    //Si al select población se le ha añadido anteriormente 'options', los elimina y añade las poblaciones.
    //pertinentes
    if (selectPoblacion.hasChildNodes()) {
      limpiarSelectPoblacion(selectPoblacion);
      anyadirOpcionesSelect(selectPoblacion, provincia);
    } else {
      //Si no, solamente añade las poblaciones pertinentes.
      anyadirOpcionesSelect(selectPoblacion, provincia);
    }
  }

  /**
   *
   * @param {String} poblacion
   * @param {Array} arrayPoblaciones
   * @returns Comprueba si la población está en el array poblaciones y:
   *            ->Si está devuelvo TRUE.
   *            ->Si NO está devuelvo FALSE.
   */
  function estaPoblacion(poblacion, arrayPoblaciones) {
    for (let i = 0; i < arrayPoblaciones.length; i++) {
      if (poblacion == arrayPoblaciones[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Compruebo el envío e imprimo el resultado.
   * @param {String} provincia
   * @param {String} poblacion
   */
  function comprobarEnvio(provincia, poblacion) {
    //Me almaceno el header.
    let header = document.getElementsByTagName("header")[0];

    //Me creo una variable.
    let parrafoAviso;

    //Si la variable NO está añadida al html, le indico que es un párrafo y le añado un ID.
    if (document.getElementById("aviso") == null) {
      parrafoAviso = document.createElement("p");
      parrafoAviso.id = "aviso";
    } else {
      //Si está en el html la almaceno.
      parrafoAviso = document.getElementById("aviso");
    }

    /**
     * Si la población está en la provincia elegida:
     *    ->Le añado una clase.
     *    ->Imprimo tanto la provincia como la población elegida.
     *
     * Si no:
     *    ->Le añado una clase.
     *    ->Informo al usuario de su error.
     */
    switch (provincia) {
      case "Alicante":
        if (estaPoblacion(poblacion, poblacionAlicante)) {
          parrafoAviso.className = "mostrar";
          parrafoAviso.innerHTML = `La provincia elegida es ${provincia} y la población es ${poblacion}`;
          header.insertAdjacentElement("afterend", parrafoAviso);
        }
        break;

      case "Castellón":
        if (estaPoblacion(poblacion, poblacionCastellon)) {
          parrafoAviso.className = "mostrar";
          parrafoAviso.innerHTML = `La provincia elegida es ${provincia} y la población es ${poblacion}`;
          header.insertAdjacentElement("afterend", parrafoAviso);
        }
        break;

      case "Valencia":
        if (estaPoblacion(poblacion, poblacionValencia)) {
          parrafoAviso.className = "mostrar";
          parrafoAviso.innerHTML = `La provincia elegida es ${provincia} y la población es ${poblacion}`;
          header.insertAdjacentElement("afterend", parrafoAviso);
        }
        break;

      default:
        parrafoAviso.className = "error";
        parrafoAviso.innerHTML =
          "No se ha elegido ninguna provincia ni ningina población";
        header.insertAdjacentElement("afterend", parrafoAviso);
    }
  }

  //Creo tanto el select como el boton.
  crearFormularioDinamico();

  //Le añado un evento "click" al botón enviar, que llamará a la función comprobarEnvio().
  document.getElementById("enviar").addEventListener(
    "click",
    function () {
      let provinciaElegida = document.getElementById("provincias").value;
      let poblacionElegida = document.getElementById("poblacion").value;
      comprobarEnvio(provinciaElegida, poblacionElegida);
    },
    false
  );

  //Le añado un evento "change" al select provincias, que se ejecutará al cambiar de opción.
  document.getElementById("provincias").addEventListener(
    "change",
    function (ev) {
      cambiarPoblacion(ev.target.value);
    },
    false
  );
};
