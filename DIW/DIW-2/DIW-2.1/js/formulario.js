"use strict";

window.onload = function () {
  let valor1 = document.getElementById("valor1");
  let valor2 = document.getElementById("valor2");
  let output = document.getElementsByTagName("output")[0];

  function sumar() {
    let operando1 = valor1.value;
    let operando2 = valor2.value;
    if (operando1 == "") {
      operando1 = 0;
    } else if (operando2 == "") {
      operando2 = 0;
    }

    return parseInt(operando1) + parseInt(operando2);
  }

  valor1.addEventListener(
    "input",
    function () {
      output.textContent = sumar();
    },
    false
  );
  valor2.addEventListener(
    "input",
    function () {
      output.textContent = sumar();
    },
    false
  );
};
