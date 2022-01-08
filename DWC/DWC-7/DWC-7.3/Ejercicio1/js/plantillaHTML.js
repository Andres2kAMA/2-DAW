"use strict";

/**
 * Añado una etiqueta modificada en el HTML.
 * @param {String} elementoACrear
 * @param {String} textoElemento
 * @param {String} idElemento
 * @param {String} dondeAnyadir
 */
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
