"use strict";

window.onload = function () {
  var video = document.getElementsByTagName("video")[0];

  var iniciar = document.getElementById("iniciar");
  var reiniciar = document.getElementById("reiniciar");
  var retrasar = document.getElementById("retrasar");
  var adelantar = document.getElementById("adelantar");
  var silenciar = document.getElementById("silenciar");
  var bajarVolumen = document.getElementById("bajarVolumen");
  var subirVolumen = document.getElementById("subirVolumen");

  iniciar.addEventListener(
    "click",
    function () {
      video.play();
    },
    false
  );
  reiniciar.addEventListener(
    "click",
    function () {
      video.load();
      video.play();
    },
    false
  );
  retrasar.addEventListener(
    "click",
    function () {
      video.currentTime -= 5;
    },
    false
  );
  adelantar.addEventListener(
    "click",
    function () {
      video.currentTime += 5;
    },
    false
  );
  silenciar.addEventListener(
    "click",
    function () {
      if (silenciar.innerHTML == "Silenciar") {
        silenciar.innerHTML = "Escuchar";
        video.muted = true;
      } else {
        silenciar.innerHTML = "Silenciar";
        video.muted = false;
      }
    },
    false
  );
  bajarVolumen.addEventListener(
    "click",
    function () {
      video.volume -= 0.1;
    },
    false
  );
  subirVolumen.addEventListener(
    "click",
    function () {
      video.volume += 0.1;
    },
    false
  );
};
