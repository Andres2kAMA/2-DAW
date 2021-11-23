"use strict";

//Ejercicio 3 - Temporizador DOM

/**
 * Añado los inputs de forma dinámica. Para ello,he realizado los siguientes pasos:
 *
 *  -> En primer lugar, me he traido con un id el párrado donde quiero añadir un input.
 *  -> A continuación, he creado un elemento input al que le he añadido un ID.
 *  -> Finalmente, he añadido el input al párrafo.
 */
function anyadirInputs() {
  var parrafoMinutos = document.getElementById("minutos");
  let inputMin = document.createElement("input");
  inputMin.id = "mins";
  parrafoMinutos.appendChild(inputMin);

  var parrafoSegundos = document.getElementById("segundos");
  let inputSeg = document.createElement("input");
  inputSeg.id = "segs";
  parrafoSegundos.appendChild(inputSeg);
}

/**
 *
 * @param {int} minutos
 * @param {int} segundos
 * @returns {Array} Devuelvo un array con el tiempo procesado, es decir, convierto el tiempo
 *                  que me introducen para que los segundos no sean NUNCA mayor a 59. Por ejemplo,
 *                  si me introducen 0 minutos y 123 segundos, devolveré un array en el que
 *                  la primera posición (minutos) sea 2, y la segunda posición (segundos) sea 3.
 */
function devolverTiempoProcesado(minutos, segundos) {
  var arrayTiempo = Array();

  arrayTiempo[0] = minutos;
  arrayTiempo[1] = segundos;

  if (arrayTiempo[1] >= 60) {
    do {
      arrayTiempo[0] += 1;
      arrayTiempo[1] -= 60;
    } while (arrayTiempo[1] >= 60);
  }

  return arrayTiempo;
}

/**
 *
 * @param {int} minutos
 * @param {int} segundos
 * @returns Devuelvo false si el número es negativo o se ha introducido un dato que no es
 *          numérico. Además, si el usuario deja un input vacío, devolveŕe 'false', ya que no
 *          ha rellenado ambos campos.
 */
function comprobarNumerosValidos(minutos, segundos) {
  if (minutos < 0 || segundos < 0 || isNaN(minutos) || isNaN(segundos)) {
    return false;
  } else {
    return true;
  }
}

/**
 * Esta función se ejecutará cuando se pulse el botón. El objetivo de esta función es
 * mostrar el temporizador.
 */
function mostrarDatos() {
  /**Para que no se ejecuten varios temporizadores a la vez, al empezar la función establezco
   *que el botón NO se pueda clickar.
   */
  boton.setAttribute("disabled", "true");

  var numerosValidos = true;

  var body = document.getElementById("body");

  //Me guardo en una String el valor que ha introducido el usuario
  var minutosString = document.getElementById("mins").value;
  var segundosString = document.getElementById("segs").value;

  /**
   * Convierto esas Strings en números. Además, si introducen números con decimales, se convierten
   * forzosamente los números a enteros.
   */
  var minutosUsuario = parseInt(minutosString);
  var segundosUsuario = parseInt(segundosString);

  //Compruebo si los números son válidos
  numerosValidos = comprobarNumerosValidos(minutosUsuario, segundosUsuario);

  //Creo un párrafo
  let parrafo = document.createElement("p");

  //Si los números son válidos, entro en el condicional
  if (numerosValidos == true) {
    //Convierto el tiempo y lo introduzco en un array
    var tiempoTotalProcesado = devolverTiempoProcesado(
      minutosUsuario,
      segundosUsuario
    );

    //Almacenos los valores de ese Array en dos variables
    var minutos = tiempoTotalProcesado[0];
    var segundos = tiempoTotalProcesado[1];

    /**Creo un intervalo en el que cada segundo voy a actualizar el contador.
     *Además, inserto condicionales, que harán que los valores de
     *los minutos y segundos cambien.
     */
    var intervalo = setInterval(function () {
      parrafo.innerText = minutos + ":" + segundos;
      if (minutos >= 1 && segundos == 0) {
        minutos--;
        segundos = 59;
      } else if (minutos == 0 && segundos == 0) {
        boton.removeAttribute("disabled");
        clearInterval(intervalo);
      } else {
        segundos--;
      }
      body.appendChild(parrafo);
    }, 1000);
  } else {
    /**
     * Si el número introducido es erróneo, vuelvo a habilitar
     * el botón e imprimo un mensaje de error.
     */
    boton.removeAttribute("disabled");
    parrafo.innerText =
      "Datos introducidos erróneamente o simplemente no introducidos";
    body.appendChild(parrafo);
  }
}

//Creo los inputs
anyadirInputs();

//Almaceno el botón en una variable
var boton = document.getElementById("boton");

//Le añado un evento, que al pulsarle, va ir directamente a la función
//mostrarDatos()
boton.addEventListener("click", mostrarDatos, false);
