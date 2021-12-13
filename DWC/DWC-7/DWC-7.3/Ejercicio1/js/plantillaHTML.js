"use strict";

function anyadirElemento(elementoACrear, textoElemento, dondeAnyadir) {
  let dondeAnyadirElemento = document.getElementById(dondeAnyadir);
  let elemento = document.createElement(elementoACrear);
  elemento.innerHTML = textoElemento;
  dondeAnyadirElemento.appendChild(elemento);
}

export { anyadirElemento };
