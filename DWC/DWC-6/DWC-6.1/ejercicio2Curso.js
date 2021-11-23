"use strict";

export class Curso {
  constructor(nombre, numAula, numModulos, numAlumnados) {
    this.nombre = nombre;
    this.numAula = numAula;
    this.numModulos = numModulos;
    this.numAlumnados = numAlumnados;
    this.modulos = new Array();
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
  anyadirModulos(modulos) {
    for (let i = 0; i < modulos.length; i++) {
      if (modulos[i].constructor.name == "Modulos") {
        this.modulos.push(modulos[i]);
      }
    }
  }
  mostrarAlumnos() {
    this.alumnos.sort();
    for (let i = 0; i < this.alumnos.length; i++) {
      console.log(this.alumnos[i].nombre);
    }
  }

  mostrarProfesores() {
    let body = document.getElementById("body");

    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");
    celdaEnunciado.colSpan = 4;
    celdaEnunciado.innerHTML = "PROFESORES";
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);
    for (let i = 0; i < this.modulos.length; i++) {
      for (let j = 0; j < this.modulos[i].profesorado.length; j++) {
        fila = document.createElement("tr");
        for (const key in this.modulos[i].profesorado[j]) {
          celdaEnunciado = document.createElement("th");
          celdaEnunciado.innerHTML = key;
          fila.appendChild(celdaEnunciado);
          tabla.appendChild(fila);
        }
        fila = document.createElement("tr");
        for (const key in this.modulos[i].profesorado[j]) {
          let celda = document.createElement("td");
          celda.innerHTML = this.modulos[i].profesorado[j][key];
          fila.appendChild(celda);
          tabla.appendChild(fila);
        }
      }
    }
    body.appendChild(tabla);
  }

  informeCurso() {
    console.log(this.nombre);
  }
}
