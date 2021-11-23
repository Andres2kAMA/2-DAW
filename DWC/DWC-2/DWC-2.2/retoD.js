"use strict";

//Reto D - Constructor (de objetos)

/**
 *
 * @param {String} nombreCurso
 * @param {int} anyoCurso
 * @param {String} descripcion
 * @param {String} nombre
 * @param {String} apellidos
 * @returns Devuelvo un objeto con los datos introducidos,
 *          en el que cada parámetro tendrá el valor introducido por el usuario
 */
function constructorCurso(
  nombreCurso,
  anyoCurso,
  descripcion,
  nombre,
  apellidos
) {
  return {
    nombreCurso: nombreCurso,
    anyoCurso: anyoCurso,
    descripcion: descripcion,
    alumno: {
      nombre: nombre,
      apellidos: apellidos,
    },
  };
}

//Imprimo lo que almacenaría el objeto
console.log(
  constructorCurso(
    "DAW",
    2021,
    "Desarrollo Aplicaciones Web",
    "Andrés",
    "Mancheño Alcaraz"
  )
);
