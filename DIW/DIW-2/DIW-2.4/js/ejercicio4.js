"use strict";

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var grd = ctx.createLinearGradient(0, 0, 400, 400);

  var porcentajeDegradados = [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1];
  var arrayColores = [
    "red",
    "orange",
    "yellow",
    "green",
    "#4b0082",
    "blue",
    "purple",
  ];

  function crearDegradado() {
    for (let i = 0; i < arrayColores.length; i++) {
      grd.addColorStop(porcentajeDegradados[i], arrayColores[i]);
    }
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 400, 400);
  }

  document.getElementById("boton").addEventListener(
    "click",
    function () {
      arrayColores = arrayColores.reverse();
      crearDegradado();
    },
    false
  );
  crearDegradado();
};
