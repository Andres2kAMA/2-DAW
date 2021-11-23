"use strict";

window.onload = function () {
  let rutasAudio = [
    "multimedia/audio/alerta-nextel-ringtones.mp3",
    "multimedia/audio/mario-bros-tuberia.mp3",
    "multimedia/audio/mario-coin.mp3",
    "multimedia/audio/whistle-campana-whatsapp.mp3",
  ];

  function reproducirSonido(boton, posicion, sonido) {
    if (document.getElementById("audio" + posicion) == null) {
      let audio = document.createElement("audio");
      audio.src = sonido;
      audio.id = "audio" + posicion;
      audio.setAttribute("autoplay", true);
      boton.appendChild(audio);
    } else {
      document.getElementById("audio" + posicion).play();
    }
  }

  function asignarEventos() {
    let botones = document.getElementsByTagName("button");
    for (let i = 0; i < 4; i++) {
      botones[i].addEventListener(
        "click",
        function () {
          reproducirSonido(botones[i], i, rutasAudio[i]);
        },
        false
      );
    }
  }
  asignarEventos();
};
