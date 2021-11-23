"use strict";

//Ejercicio 5 - Creando funciones DOM

/**
 *
 * @param {String} nuevoElemento
 * @param {String} existenteElemento
 * Esta función añadirá el elemento 1 después del elemento 2
 */
function insertAfter(nuevoElemento, existenteElemento) {
  /**
   * Seleeciono la etiqueta con el ID indicado
   */
  var elementoExistente = document.getElementById(existenteElemento);

  /**
   * Imprimo un mensaje de error si el ID no existe
   */
  if (elementoExistente == null) {
    alert("La etiqueta no se encuentra en el HTML");
  }

  /**
   * Si el número NO es un número, añade el elementoNuevo después del elementoExistente
   */
  if (!Number.isInteger(nuevoElemento)) {
    //Creo el elemento con el DOM y le inserto texto
    var elementoParaAnyadir = document.createElement(nuevoElemento);
    elementoParaAnyadir.innerHTML = "Elemento añadido con el DOM";

    /**
     * Selecciono el padre del elementoExistente
     * y llamo a la función insertBefore:
     * A esta función le meto como parámetros:
     *  ->El elemento a añadir
     *  ->El siguiente hermano del elemento existente, lo que ocasionará que se sitúe
     *    el 'elementoParaAnyadir' después del elemento existente.
     */
    elementoExistente.parentNode.insertBefore(
      elementoParaAnyadir,
      elementoExistente.nextSibling
    );
  } else {
    alert("La etiqueta no se encuentra en el HTML");
  }
}

//Llamo a la función a la que le voy a insertar un h1 después de la
// etiqueta con el id indicado
insertAfter("h1", "primerElemento");
