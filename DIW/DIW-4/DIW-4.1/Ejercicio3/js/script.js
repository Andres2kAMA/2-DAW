"use strict";

window.onload = () => {
  document.getElementById("justify").addEventListener(
    "input",
    function () {
      let valor = document.getElementById("justify").value;
      modificarJustifyCuadricula(valor);
      modificarTamanyoElemento(valor);
    },
    false
  );

  document.getElementById("align").addEventListener(
    "input",
    function () {
      let valor = document.getElementById("align").value;
      modificarAlignCuadricula(valor);
      modificarTamanyoElemento(valor);
    },
    false
  );

  function modificarJustifyCuadricula(valor) {
    document.getElementById("cuadricula").style.justifyItems = `${valor}`;
  }

  function modificarAlignCuadricula(valor) {
    document.getElementById("cuadricula").style.alignItems = `${valor}`;
  }
};
