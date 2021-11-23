"use strict";

//Ejercicio 1 - El censor DOM

/**
 * Selecciono el Body mediante la función 'querySelector', la cual
 * me devolverá la primera ocurrencia de la etiqueta. Después, almaceno
 * todas las etiquetas dentro de body.
 */
var body = document.querySelector("body");
var elementosBody = body.children;

//Recorro todas las etiquetas del body
for (let i = 0; i < elementosBody.length; i++) {
  //Almaceno el texto de la etiqueta
  let textoAModificar = elementosBody[i].innerHTML;

  /**
   * En textoModificado, cambio la palabra "sexo" por
   * un párrafo con una clase y el texto "Contenido Bloqueado".
   * La clase hará lo siguiente:
   *  ->Eliminar el salto de línea del párrafo
   *  ->Poner el texto en color rojo, negrita y cursiva
   */
  let textoModificado = textoAModificar.replace(
    "sexo",
    "<p class='palabraCensurada'>Contenido Bloqueado</p>"
  );

  //Cambio el texto que había anteiormente por el texto modificado
  elementosBody[i].innerHTML = textoModificado;
}
