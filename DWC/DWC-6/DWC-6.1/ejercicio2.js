"use strict";
import * as Curso from "./ejercicio2Curso.js";
import * as Alumnos from "./ejercicio2Alumnado.js";
import * as Profesores from "./ejercicio2Profesorado.js";
import * as Modulos from "./ejercicio2Modulos.js";

window.onload = function () {
  var curso = new Curso.Curso("2-DAW", "Aula 23", "2");
  var alumnoUno = new Alumnos.Alumnado(
    "12345678Q",
    "Carlos",
    "Mancheño ALcaraz",
    "24/05/2000",
    8.9
  );

  var alumnoDos = new Alumnos.Alumnado(
    "87654321W",
    "Ana",
    "Navarro Carpio",
    "24/10/2000",
    10
  );
  curso.matricularAlumno(alumnoUno);

  curso.matricularAlumno(alumnoDos);

  curso.mostrarAlumnos();
};
