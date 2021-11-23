"use strict";

export class Curso {
  constructor(nombre, numAula, numModulos) {
    this.nombre = nombre;
    this.numAula = numAula;
    this.numModulos = numModulos;
    this.alumnos = new Array();
  }

  notaMedia() {
    let notaMedia = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      notaMedia += this.alumnos[i].notaMedia;
    }
    return notaMedia / this.alumnos.length;
  }

  matricularAlumno(alumno) {
    if (alumno.constructor.name == "Alumnado") {
      this.alumnos.push(alumno);
    }
  }

  mostrarAlumnos() {
    this.alumnos.sort();
    for (let i = 0; i < this.alumnos.length; i++) {
      console.log(this.alumnos[i].nombre);
    }
  }

  informeCurso() {
    console.log(this.nombre);
  }
}
