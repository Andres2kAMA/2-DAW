"use strict";

//Ejercicio 2 - Temporizador

/**
 *
 * @param {Int} numeroDatosIntroducidos
 * @returns Devuelvo 'true' si se han introducido los segundos,
 *          es decir, si se han introducido a la función
 *          'temporizador' 2 datos.
 */
function haIntroducidoLosSegundos(numeroDatosIntroducidos) {
  if (numeroDatosIntroducidos == 2) {
    return true;
  }
  return false;
}

/**
 *
 * @param {Arrar[]} datos
 * @returns Devuelvo 'true' si se han introducido correctamente los datos
 *          y 'false', si se ha introducido algún dato erróneo
 */
function datosIntroducidosCorrectos(datos) {
  /**
   * Para que el pseudoarray 'arguments' tenga todas las funciones de un array
   * y por tanto, se puede recorrer en un foreach, he copiado en una variable
   * nueva los datos de arguments más todas las funciones de un array.
   */
  let datosArray = Array.prototype.slice.call(datos);

  let datoCorrecto = true;

  datosArray.forEach((elemento) => {
    if (isNaN(elemento) || elemento < 0 || !Number.isInteger(elemento)) {
      datoCorrecto = false;
    }
  });

  return datoCorrecto;
}

/**
 *
 * @param {Int} minutos
 * @param {Int} segundos
 * @returns Devuelvo el tiempo que se va a tener que ejecutar el intervalo
 */
function devolverTiempoDeEjecucion(minutos, segundos) {
  return minutos * 60 + segundos;
}

/**
 *
 * @param {Int} minutos
 * @param {Int} segundos
 */
function temporizador(minutos, segundos) {
  let contador;
  let pararIntervalo;

  if (datosIntroducidosCorrectos(arguments)) {
    if (haIntroducidoLosSegundos(arguments.length)) {
      contador = devolverTiempoDeEjecucion(minutos, segundos);

      pararIntervalo = setInterval(() => {
        console.log(`${contador}  segundo(s)`);
        contador--;
        //Si el contador es igual al tiempo de ejecución, paro el intervalo
        if (contador == 0) {
          console.log("Temporizador finalizado");
          clearInterval(pararIntervalo);
        }
      }, 1000);
    } else {
      /**Como cuando se introduce 1 dato, tenemos que tomar los minutos como si fueran segundos,
       * para que quede más legible inicializo la variable contador a minutos.
       * Esto lo he hecho por mera legibilidad.
       */
      contador = minutos;

      pararIntervalo = setInterval(() => {
        console.log(`${contador}  segundo(s)`);
        contador--;
        //Si el contador es igual a los minutos, paro el intervalo
        if (contador == 0) {
          console.log("Temporizador finalizado");
          clearInterval(pararIntervalo);
        }
      }, 1000);
    }
  } else {
    //Si ha introducido datos erróneos muestro el mensaje de error
    console.log(
      "Es de mi agrado informarle que me ha costado menos hacer que no me rompas el programa que derrotar a Molinete."
    );
  }
}

//Llamo a la función
temporizador(2, 50);
