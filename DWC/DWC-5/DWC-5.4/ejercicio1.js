"use strict";

//Ejercicio 1 - Parejas

window.onload = function () {
  /**
   * Me creo las 5 variables que voy a utilizar.
   */
  var semaforo = 0;
  var contadorIntentos = 0;
  var pararTemporizador;
  var comprobarCartaIgual = Array();
  var posicionesAleatorias = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

  /**
   * Esta función mezclará el array.
   *
   * @param {Array} posicionesAleatorias
   */
  function shuffleArray(posicionesAleatorias) {
    posicionesAleatorias.sort(() => Math.random() - 0.5);
  }

  /**
   * Esta función le dará la vuelta a la carta y la añadirá al array.
   *
   * @param {Object} carta
   * @param {int} posicion
   */
  function voltearCarta(carta, posicion) {
    carta.src = "img/carta" + posicionesAleatorias[posicion] + ".jpg";
    comprobarCartaIgual.push(carta);
  }

  /**
   * Esta función comprobará si las cartas volteadas son iguales.
   *  Si lo son:
   *    ->Borrará los datos del array.
   *    ->Se le asignará el valor '0' a la variable semáforo.
   *
   *  Si NO lo son:
   *    ->A las cartas volteadas se les volverá a dar la vuelta.
   *    ->Borrará los datos del array.
   *    ->Se le asignará el valor '0' a la variable semáforo.
   */
  function comprobarCartas() {
    if (comprobarCartaIgual[0].src != comprobarCartaIgual[1].src) {
      for (let i = 0; i < comprobarCartaIgual.length; i++) {
        comprobarCartaIgual[i].src = "img/reversoCarta.jpeg";
      }
    }
    comprobarCartaIgual = Array();
    semaforo = 0;
  }

  /**
   *
   * @returns Devuelve true si todas las cartas están volteadas correctamente.
   */
  function comprobarPartidaAcabada() {
    let img = document.getElementsByTagName("img");
    for (let i = 0; i < img.length; i++) {
      if (img[i].src.includes("img/reversoCarta.jpeg")) {
        return false;
      }
    }
    return true;
  }

  /**
   * Esta función imprimirá un mensaje avisando que la partida a terminado y parará
   * el temporizador.
   */
  function acabarTemporizador() {
    let aviso = document.createElement("p");
    aviso.innerHTML = "¡HAS GANADO!";
    aviso.id = "partidaAcabada";
    document.getElementById("header").insertAdjacentElement("afterend", aviso);
    clearInterval(pararTemporizador);
  }

  /**
   * Esta función empezará el temporizador.
   */
  function empezarTemporizador() {
    //Selecciono el temporizador.
    let temporizador = document.getElementById("temporizador");

    //Le indico un intervalo.
    pararTemporizador = setInterval(function () {
      //Si el valor es un String vacío, le indico que el valor sea '0:0'.
      if (temporizador.value == "") {
        temporizador.value = "0:0";
      } else {
        //Separo el temporizador y lo almaceno en dos variables.
        let minutos = parseInt(temporizador.value.split(":")[0]);
        let segundos = parseInt(temporizador.value.split(":")[1]);

        //Si los segundos son iguales a 60, pasarán a valer 0 y se incrementará en 1 los minutos.
        if (segundos == 60) {
          minutos++;
          segundos = 0;
        } else {
          //Si no, se incrementará en 1 los segundos.
          segundos++;
        }
        //Muestro por pantalla el tiempo.
        temporizador.value = minutos + ":" + segundos;
      }
      //Esta función se ejecutará cada segundo.
    }, 1000);
  }

  /**
   * Esta función se encargará del flujo del programa.
   *
   * @param {Evento} ev
   * @param {int} posicion
   */
  function funcionPrincipal(ev, posicion) {
    //Si la carta clicada es el reverso entrará en la condición.
    if (ev.target.src.includes("img/reversoCarta.jpeg")) {
      /**
       * Si anteriormente se hubiese mostrado un error, lo elimino.
       */
      if (document.getElementById("error") != null) {
        document
          .getElementById("error")
          .parentNode.removeChild(document.getElementById("error"));
      }

      /**
       * Si es la segunda vez que se llega hasta aquí:
       *  ->Se volteará la carta.
       *  ->Se establecerá un timeout de medio segundo para comprobar las cartas volteadas.
       *  ->Se incrementará tanto el semáforo como el número de intentos.
       *  ->Muestro el número de intentos.
       *  ->Compruebo si la partida a finalizado.
       */
      if (semaforo == 1) {
        voltearCarta(ev.target, posicion, 1);
        setTimeout(comprobarCartas, 500);

        semaforo++;
        contadorIntentos++;

        document.getElementById("intentos").value =
          parseInt(document.getElementById("intentos").value) + 1;

        if (comprobarPartidaAcabada()) {
          acabarTemporizador();
        }
      } else if (semaforo == 0) {
        //Si semáforo es 0, volteo la carta y aumento en 1 el valor del semáforo.
        voltearCarta(ev.target, posicion, 0);
        semaforo++;
      }
    } else {
      //Si semáforo es mayor a 1 imprimo un mensaje de error.
      if (document.getElementById("error") == null) {
        let p = document.createElement("p");
        p.innerHTML = "A la carta ya se le ha dado la vuelta";
        p.id = "error";
        document.getElementById("header").insertAdjacentElement("afterend", p);
      }
    }
  }

  /**
   * Borro los datos del temporizador y de intentos.
   * Asigno a las imágenes eventos "click".
   */
  function asignarEventos() {
    document.getElementById("temporizador").value = "";
    document.getElementById("intentos").value = contadorIntentos;
    for (let i = 0; i < 12; i++) {
      document.getElementsByTagName("img")[i].addEventListener(
        "click",
        function (ev) {
          funcionPrincipal(ev, i);
        },
        false
      );
    }
  }

  //Empiezo el temporizador.
  empezarTemporizador();

  //Aleotorizo el array.
  shuffleArray(posicionesAleatorias);

  //Asigno los eventos.
  asignarEventos();
};
