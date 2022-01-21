"use strict";

window.onload = () => {
  document.getElementById("gridFila").addEventListener(
    "input",
    function () {
      let gridRow = document.getElementById("gridFila").value;
      let gridColumna = document.getElementById("gridColumna").value;
      actualizarGridGapHtml(gridRow, gridColumna);
      actualizarGridGapCss(gridRow, gridColumna);
    },
    false
  );

  document.getElementById("gridColumna").addEventListener(
    "input",
    function () {
      document.getElementById("cuadricula").style.gridAutoFlow = "row";
    },
    false
  );

  document.getElementById("radioRow").addEventListener(
    "click",
    function () {
      document.getElementById("cuadricula").style.gridAutoFlow = "column";
    },
    false
  );

  document.getElementById("radioColumn").addEventListener(
    "click",
    function () {
      let gridRow = document.getElementById("gridFila").value;
      let gridColumna = document.getElementById("gridColumna").value;
      actualizarGridGapHtml(gridRow, gridColumna);
      actualizarGridGapCss(gridRow, gridColumna);
    },
    false
  );

  function actualizarGridGapHtml(gridRow, gridColumna) {
    document.getElementById("valorGridFila").innerHTML = gridRow;
    document.getElementById("valorGridColumna").innerHTML = gridColumna;
    document.getElementById("spangridRowGap").innerHTML = gridRow;
    document.getElementById("spangridColumnGap").innerHTML = gridColumna;
  }

  function actualizarGridGapCss(gridRow, gridColumna) {
    document.getElementById(
      "cuadricula"
    ).style.gridGap = `${gridRow}px ${gridColumna}px`;
  }
};
