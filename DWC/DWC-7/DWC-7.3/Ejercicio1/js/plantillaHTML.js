"use strict";

function anyadirElemento(
  elementoACrear,
  textoElemento,
  idElemento,
  dondeAnyadir
) {
  let dondeAnyadirElemento = document.getElementById(dondeAnyadir);
  let elemento = document.createElement(elementoACrear);
  elemento.innerHTML = textoElemento;
  elemento.id = idElemento;
  dondeAnyadirElemento.appendChild(elemento);
}

export { anyadirElemento };
