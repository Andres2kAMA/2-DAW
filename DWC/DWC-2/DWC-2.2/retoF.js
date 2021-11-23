"use strict";

//Reto F - Mostrando II (Objetos)

/**
 *
 * @param {Object} objetoAMostrar
 */
function imprimirObjetos(objetoAMostrar) {
  /**
   * Como no sabemos las propiedades
   */
  for (var propiedad in objetoAMostrar) {
    if (typeof objetoAMostrar[propiedad] == "object") {
      console.log(" ");
      imprimirObjetos(objetoAMostrar[propiedad]);
    } else {
      console.log(` ${propiedad.toUpperCase()}: ${objetoAMostrar[propiedad]}`);
    }
  }
}

//Creo un objeto alumno
var alumno = {
  nombre: "Andres",
  apellidos: "Mancheño Alcaraz",
  edad: 21,
  aficiones: {
    correr: "Parque",
    cantar: "Ducha",
  },
};

//Imprimo el objeto
imprimirObjetos(alumno);
