"use strict";

//Reto E - Mostrando (objetos)

/**
 *
 * @param {String} nombreCurso
 * @param {int} anyoCurso
 * @param {String} descripcion
 * @param {String} nombre
 * @param {String} apellidos
 * @returns Devuelvo un objeto con los datos introducidos,
 *          en el que cada parámetro tendrá el valor introducido
 *          por el usuario
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

/**
 *
 * @param {Object} cursoAMostrar
 */
function mostrarCurso(cursoAMostrar) {
  console.log(
    `${cursoAMostrar.alumno.nombre} ${cursoAMostrar.alumno.apellidos} se ha matriculado al curso ${cursoAMostrar.nombreCurso} (${cursoAMostrar.descripcion}) en el año ${cursoAMostrar.anyoCurso}.`
  );
}

//Creo las dos variables
let cursoUno, cursoDos;

//Convierto dichas variables a objetos de curso
cursoUno = constructorCurso(
  "DAW",
  2021,
  "Desarrollo Aplicaciones Web",
  "Andrés",
  "Mancheño Alcaraz"
);

cursoDos = constructorCurso(
  "DAM",
  2020,
  "Desarrollo Aplicaciones Multimedia",
  "Carlos",
  "García Serrano"
);

//Muestro los cursos
mostrarCurso(cursoUno);
mostrarCurso(cursoDos);
