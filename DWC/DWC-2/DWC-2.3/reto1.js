"use strict";

//Ejercicio 1 - Cruz

function dibujarCruz(ladoCuadrado) {
  if (ladoCuadrado % 3 != 0) {
    //Si el número no es múltiplo de 3 devuelvo un error
    console.log("Debes introducir un número múltiplo de 3");
  } else {
    //Declaro las variables
    let tercioDelLado, contadorUno, contadorDos, dibujo;

    //Inicializo las variables
    tercioDelLado = ladoCuadrado / 3;
    contadorUno = 0;
    contadorDos = 0;
    dibujo = " ";

    /**
     * El primer for se va a ejecutar el mismo número de veces
     * que el valor del número introducido por el usuario
     */
    for (let i = 0; i < ladoCuadrado; i++) {
      /**
       * Como la cruz va por patrones de 3, en el primer y último tercio
       * se tiene que ejecutar el mismo patrón, por lo que mediante un if
       * digo que si la 'i'(que indica la fila del cuadrado) está dentro del
       * primer o el último tércio, entrará en el condicional.
       */
      if (i < tercioDelLado || i >= tercioDelLado * 2) {
        /**
         * Como es un cuadrado, el número de filas será el mismo que el número
         * de elementos en cada fila, por lo que creo otro bucle for
         * que se va a recorrer el número de filas del cuadrado
         */
        for (let j = 0; j < ladoCuadrado; j++) {
          /**
           * Si el contador está en el primer o último tercio
           * añado al String dibujo una almoadilla
           */
          if (contadorUno < tercioDelLado || contadorUno > tercioDelLado * 2) {
            dibujo += "#";
          } else {
            /**
             * Si no, ahora va intervenir un segundo contador, el cual
             * nos ayudará a dibujar el segundo patrón. Si este segundo patrón
             * es menor que un tercio del lado del cuadrado, dibujará un punto
             * y aumentará el contador en uno.
             */
            if (contadorDos < tercioDelLado) {
              dibujo += "·";
              contadorDos++;
            } else {
              /**
               * Si no, dibujará una almoadilla y dejará el contadorUno a -1 (ya
               * que se va a aumentar en uno debajo) y el contadorDos a 0
               */
              dibujo += "#";
              contadorUno = -1;
              contadorDos = 0;
            }
          }

          //Aumento en uno el contador uno
          contadorUno++;
        }
      } else {
        /**
         * Si la fila (i) se encuentra en el segundo tercio del cuadrado,
         * sólamente tengo que imprimir un punto
         */
        for (let j = 0; j < ladoCuadrado; j++) {
          dibujo += "·";
        }
      }

      /**
       * Al dibujar la fila,hago los siguientes pasos:
       * =>dejo el contadorUno a 0,
       * =>imprimo el String dibujo,
       * =>dejo el String dibujo vacío<
       * =>imprimo un espacio para que el navegador lo imprima bien
       */
      contadorUno = 0;
      console.log(dibujo);
      dibujo = " ";
      console.log(" ");
    }
  }
}

//Llamo a la función
dibujarCruz(21);
