window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var srcImg = document.getElementById("gato");

  ctx.drawImage(srcImg, 0, 0, ctx.canvas.width, ctx.canvas.height);

  var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  var pixels = imgData.data;

  for (var i = 0; i < pixels.length; i += 4) {
    var luminosidad = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);
    pixels[i] = luminosidad;
    pixels[i + 1] = luminosidad;
    pixels[i + 2] = luminosidad;
  }
  ctx.putImageData(imgData, 0, 0);
};
