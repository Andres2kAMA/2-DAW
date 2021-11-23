"use strict";

//Ejercicio 3 - Ocultar DOM

/**
 *
 * @param {id} parrafo
 */
function desaparecerParrafo(parrafo) {
  //Selecciono el párrafo
  let parrafoADesaparecer = document.getElementById(parrafo);

  //Indico que se oculte
  parrafoADesaparecer.style = "visibility:hidden";
}

/**
 *
 * @param {id} parrafo
 */
function eliminarParrafo(parrafo) {
  //Selecciono el párrafo
  let parrafoADesaparecer = document.getElementById(parrafo);

  //Indico que se "elimine"
  parrafoADesaparecer.style = "display:none";
}

function reaparecerParrafos() {
  //Selecciono todos los párrafos
  let parrafos = document.getElementsByTagName("p");
  for (let i = 0; i < parrafos.length; i++) {
    //Si no se ha eliminado posteriormente el párrafo, muestro el párrafo
    if (parrafos[i].style.display != "none") {
      parrafos[i].style = "visibility:visible";
    }
  }
}
