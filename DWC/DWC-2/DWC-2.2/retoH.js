"use strict";

//Reto H - Modificando (objetos)

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
function constructorCurso(nombreCurso, anyoCurso, descripcion) {
  return {
    nombreCurso: nombreCurso,
    anyoCurso: anyoCurso,
    descripcion: descripcion,
    alumnado: {
      nombre: new Array(),
      apellidos: new Array(),
    },
    matricular: function (estudiante) {
      this.alumnado.nombre.push(estudiante.nombre);
      this.alumnado.apellidos.push(estudiante.apellidos);
    },
    imprimirAlumnos: function () {
      let alumnos = " ";
      for (let i = 0; i < this.alumnado.nombre.length; i++) {
        if (i == this.alumnado.nombre.length - 1) {
          alumnos +=
            this.alumnado.nombre[i] + " " + this.alumnado.apellidos[i] + ".";
        } else {
          alumnos +=
            this.alumnado.nombre[i] + " " + this.alumnado.apellidos[i] + ", ";
        }
      }
      return alumnos;
    },
    imprimir: function () {
      console.log(
        `En el año ${this.anyoCurso},el curso ${this.nombreCurso}(${
          this.descripcion
        }) tiene matriculados los siguientes alumnados:${this.imprimirAlumnos()}`
      );
    },
  };
}
let cursoUno = constructorCurso("DAW", 2021, "Desarrollo Aplicaciones Web");

var estudianteUno = {
  nombre: "Andrés",
  apellidos: "Mancheño",
};
var estudianteDos = {
  nombre: "Lucas",
  apellidos: "Garcia",
};

cursoUno.matricular(estudianteUno);
cursoUno.matricular(estudianteDos);

cursoUno.imprimir();
