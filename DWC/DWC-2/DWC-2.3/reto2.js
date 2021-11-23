"use strict";

//Ejercicio 2 - Marco

/**
 *
 * @param {int} tamanyoLienzo
 * @param {int} tamanyoInterior
 */
function dibujarMarco(tamanyoLienzo, tamanyoInterior) {
  /**
   * Devolveré un error si:
   * =>El tamaño interior es igual o mayor al tamaño del lienzo
   *
   * =>Ambos números no pares o impares
   *
   *
   * Esta última restricción la he hecho ya que si ambos números no son
   * pares o impares el marco quedaría asimétrico. Por ejemplo,
   * si el tamaño del lienzo fuera 10 y el tamaño interior fuera 9,quedaría así:
   *
   *            ##########
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *            #·········
   *
   *
   * En cambio, si ambos números introducidos fueran pares o impares,
   * quedaría de la siguiente manera:
   * Imaginando que el tamaño del lienzo es 10, y el tamaño interior es 8:
   *            ##########
   *            #········#
   *            #········#
   *            #········#
   *            #········#
   *            #········#
   *            #········#
   *            #········#
   *            #········#
   *            ##########
   */

  if (
    tamanyoLienzo <= tamanyoInterior ||
    (tamanyoLienzo % 2 == 0 && tamanyoInterior % 2 != 0) ||
    (tamanyoLienzo % 2 != 0 && tamanyoInterior % 2 == 0)
  ) {
    console.log(
      "El primer número tiene que ser mayor que el segundo. Además,ambos números deben ser pares o impares"
    );
  } else {
    /**
     * Creo e inicializo la variable `diferenciaTamanyos', que tendrá
     * como objetivo dividir los patrones. Por ejemplo, si me introducen
     * los números (10,8) respectivamente, diferenciaTamayos almacenará '1',
     * que indicará el número de filas (tanto por arriba como por abajo) que
     * se tendrán que dibujar sólamente con el símbolo '#'.
     */
    let diferenciaTamanyos = (tamanyoLienzo - tamanyoInterior) / 2;

    /**
     * Esta variable se utilizará para saber cuando no añadir más '·'.
     * Por así decirlo, es como un contador de '·' introducidos.
     */
    let finDelMarco = diferenciaTamanyos + tamanyoInterior;

    //Creo la String dibujo y la inicializo con nada dentro de ella.
    let dibujo = "";

    /**
     * Hago dos bucles for con el tamaño del Lienzo, ya que tengo que recorrer
     * tanto las filas como las columnas
     */
    for (let i = 0; i < tamanyoLienzo; i++) {
      for (let j = 0; j < tamanyoLienzo; j++) {
        /**Si 'i'( que representa a las filas) es menor que 'diferenciaTamanyos' o
         * mayor o igual que 'finDelMarco' entrará en el condicional
         */
        if (i < diferenciaTamanyos || i >= finDelMarco) {
          dibujo += "#";
        } else {
          /**Si 'j'( que representa a las columnas) es menor que 'diferenciaTamanyos' o
           * mayor o igual que 'finDelMarco' entrará en el condicional
           */
          if (j < diferenciaTamanyos || j >= finDelMarco) {
            dibujo += "#";
          } else {
            //Si no, se añadirá a la String 'dibujo' un '·'
            dibujo += "·";
          }
        }
      }

      //Imprimo por pantalla el dibujo
      console.log(dibujo);

      //Borro todo lo introducido en el String 'dibujo'
      dibujo = "";

      //Genero un espacio
      console.log();
    }
  }
}

//Llamo a la función
dibujarMarco(21, 7);
