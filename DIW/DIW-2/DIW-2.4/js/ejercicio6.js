"use strict";

window.onload = function () {
  var lienzo = null,
    canvas = null;
  var x = 50,
    y = 50;
  var lastPress = null;
  var juegoPausado = false;

  const KEY_LEFT = 37;
  const KEY_UP = 38;
  const KEY_RIGHT = 39;
  const KEY_DOWN = 40;
  const KEY_P = 80;

  function iniciar() {
    canvas = document.getElementById("lienzo");
    lienzo = canvas.getContext("2d");
    run();
  }

  function run() {
    requestAnimationFrame(run);
    pintarLienzo(lienzo);
    accionesJuego();
  }

  function comprobarJuegoPausado() {
    if (lastPress == KEY_P) {
      juegoPausado = true;

      if (document.getElementById("aviso") == null) {
        let aviso = document.createElement("p");
        aviso.id = "aviso";
        aviso.innerHTML = "El juego está PAUSADO";
        document
          .getElementById("lienzo")
          .insertAdjacentElement("beforebegin", aviso);
      }
    } else {
      if (document.getElementById("aviso") != null) {
        document
          .getElementById("aviso")
          .parentNode.removeChild(document.getElementById("aviso"));
      }
      juegoPausado = false;
    }
  }

  function comprobarMovimientoJugador() {
    if (!juegoPausado) {
      if (lastPress == KEY_LEFT) {
        x -= 5;
      } else if (lastPress == KEY_UP) {
        y -= 5;
      } else if (lastPress == KEY_RIGHT) {
        x += 5;
      } else if (lastPress == KEY_DOWN) {
        y += 5;
      }

      if (x >= canvas.width) x = 0;
      if (y >= canvas.height) y = 0;
      if (x < 0) x = canvas.width;
      if (y < 0) y = canvas.height;
    }
  }

  function accionesJuego() {
    comprobarJuegoPausado();
    comprobarMovimientoJugador();
  }

  function pintarLienzo(lienzo) {
    lienzo.fillStyle = "#E5E4E2";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);
    lienzo.fillStyle = "#FF0000";
    lienzo.fillRect(x, y, 10, 10);
  }

  document.addEventListener(
    "keydown",
    function (evt) {
      lastPress = evt.keyCode;
    },
    false
  );

  iniciar();
};
