"use strict";
import * as Curso from "./ejercicio2Curso.js";
import * as Alumnos from "./ejercicio2Alumnado.js";
import * as Profesores from "./ejercicio2Profesorado.js";
import * as Modulos from "./ejercicio2Modulos.js";

window.onload = function () {
  var curso = new Curso.Curso("2-DAW", "Aula 23", "3", "2");
  var alumnoUno = new Alumnos.Alumnado(
    "12345678Q",
    "Andrés",
    "Mancheño Alcaraz",
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

  var profesoresDWC = new Array();

  var profesorUno = new Profesores.Profesorado(
    "12345678A",
    "Luis",
    "García García",
    "24/05/1990"
  );

  var profesorDos = new Profesores.Profesorado(
    "87654321Z",
    "Sara",
    "Pérez Pérez",
    "05/02/1995"
  );

  var profesorTres = new Profesores.Profesorado(
    "19283746F",
    "Noa",
    "Mancheño Aracil",
    "24/11/1998"
  );

  profesoresDWC.push(profesorUno, profesorDos, profesorTres);
  var arrayModulos = new Array();

  var moduloDWC = new Modulos.Modulos("DWC", 128);
  var moduloDWS = new Modulos.Modulos("DWS", 96);

  moduloDWC.anyadirProfesorado(profesoresDWC);

  moduloDWS.anyadirProfesorado(profesorDos);

  arrayModulos.push(moduloDWC, moduloDWS);

  curso.matricularAlumno(alumnoUno);

  curso.matricularAlumno(alumnoDos);

  curso.anyadirModulos(arrayModulos);

  alumnoUno.anyadirModulos(arrayModulos);
  alumnoDos.anyadirModulos(moduloDWS);
  curso.mostrarProfesores();

  curso.mostrarAlumnos("descendente");

  curso.informeCurso();
};
