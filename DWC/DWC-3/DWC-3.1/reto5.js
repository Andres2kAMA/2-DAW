"use strict";

//Ejercicio 5 - Más DNI

function mostrarDNIs(dnis) {
  let contador = 1;
  dnis.forEach((dni) => {
    console.log(`DNI ${contador}: ${dni}`);
    contador++;
  });
}

function validarLetraDNI(letraUsuario) {
  /**
   * Creo una expresión regular. El objetivo es validar
   * que el usuario introduzca una letra distinta a
   * 'I','Ñ','O' Y 'U', ya que no son letras válidas en
   * el DNI
   */
  const expReg = /[A-H/J-N/P-T/W-Z]{1}/;

  if (expReg.test(letraUsuario)) {
    return true;
  } else {
    return false;
  }
}

function comprobarDNIs(letra) {
  let dnisPosibles = new Array();
  let posiblesLetras = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (validarLetraDNI(letra)) {
    /**Me almaceno en una variable la posición en la que se encuentra la letra
     * fijándonos en la variable 'posiblesLetras'.
     */
    let posicionLetraUsuario = posiblesLetras.indexOf(letra);
    for (let i = 0; i < 1000; i++) {
      if (i % 23 == posicionLetraUsuario) {
        dnisPosibles.push(i + letra);
      }
    }
  } else {
    console.log(`La letra ${letra} no es una letra válida para el DNI.`);
  }

  mostrarDNIs(dnisPosibles);
}

//Llamo a la función
comprobarDNIs("A");
