"use strict";

//Ejercicio 3 - DNI

/**
 *
 * @returns Devuelvo el DNI
 */
function pedirDNI() {
  /**
   * Creo una expresión regular. El objetivo es validar
   * que el DNI introducido por el usuario tenga sólamente
   * 8 dígitos.
   */
  const expReg = /[0-9]{8}/;
  let dniUsuario;
  do {
    dniUsuario = prompt(
      "Introduce el DNI sin la letra (-1 para finalizar el programa): ",
      "12345678"
    );
    if (dniUsuario == "-1") {
      return -1;
    }
  } while (expReg.test(dniUsuario) == false);
  return dniUsuario;
}

/**
 *
 * @param {String} dni
 * @returns Devuelvo la letra
 */
function calcularLetra(dni) {
  //Sólo hay 23 posibles letras para el DNI, las cuales son las siguientes:
  let posiblesLetras = "TRWAGMYFPDXBNJZSQVHLCKE";

  //Me guardo el resto de la división entre el DNI y 23 (las posibles letras)
  let posicionLetra = dni % 23;

  //Devuelvo la letra dependiendo del resultado de la operación anterior
  return posiblesLetras[posicionLetra];
}

/**
 *
 * @param {Array[]} dnisIntroducidos
 */
function mostrarDNIs(dnisIntroducidos) {
  let contador = 1;
  dnisIntroducidos.forEach((dni) => {
    console.log(`DNI ${contador}: ${dni}`);
    contador++;
  });
}

/**
 * Esta función se encargará de recoger los datos de las dos funciones anteriores cada
 * 20 segundos (hasta que se introduzca -1) y cuando se introduzca -1 mostrará todos los
 * DNIs introducidos.
 */
function calcularDNI() {
  let dnisIntroducidos = new Array();

  let pararIntervalo = setInterval(() => {
    let dni = pedirDNI();
    if (dni == -1) {
      mostrarDNIs(dnisIntroducidos);
      clearInterval(pararIntervalo);
    } else {
      let letraDNI = calcularLetra(dni);
      dnisIntroducidos.push(dni + letraDNI);
    }
  }, 20000);
}

//Llamo a la función
calcularDNI();
