"use strict";

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  /*
   *PARTE 1
   */

  //Arco 1
  ctx.beginPath();
  ctx.arc(100, 50, 50, Math.PI, Math.PI / 2, true);
  ctx.lineWith = 10;
  ctx.stroke();

  //Arco 2
  ctx.beginPath();
  ctx.arc(300, 50, 50, 1 * Math.PI, 2 * Math.PI, true);
  ctx.lineWith = 10;
  ctx.stroke();

  //Arco 3
  ctx.beginPath();
  ctx.arc(100, 200, 50, Math.PI / 2, Math.PI, true);
  ctx.lineWith = 10;
  ctx.stroke();

  //Arco 4
  ctx.beginPath();
  ctx.arc(300, 200, 50, Math.PI, 2 * Math.PI, false);
  ctx.lineWith = 10;
  ctx.stroke();

  /*
   *PARTE 2
   */
  //Rectángulo negro
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;
  ctx.strokeRect(500, 50, 100, 100);

  //Rectángulo amarillo
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 6;
  ctx.globalAlpha = 0.15;
  ctx.strokeRect(502, 52, 100, 100);

  //Rectángulo negro
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;
  ctx.strokeRect(515, 65, 100, 100);

  //Rectángulo verde
  ctx.strokeStyle = "green";
  ctx.lineWidth = 6;
  ctx.globalAlpha = 0.15;
  ctx.strokeRect(517, 67, 100, 100);

  //Rectángulo negro
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;
  ctx.strokeRect(530, 80, 100, 100);

  //Rectángulo azul
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 6;
  ctx.globalAlpha = 0.15;
  ctx.strokeRect(532, 82, 100, 100);

  //Rectángulo negro
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;
  ctx.strokeRect(550, 95, 100, 100);

  //Rectángulo rojo
  ctx.strokeStyle = "red";
  ctx.lineWidth = 6;
  ctx.globalAlpha = 0.15;
  ctx.strokeRect(552, 98, 100, 100);
};
