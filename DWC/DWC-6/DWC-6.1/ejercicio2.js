"use strict";
import * as Curso from "./ejercicio2Curso.js";
import * as Alumnos from "./ejercicio2Alumnado.js";
import * as Profesores from "./ejercicio2Profesorado.js";
import * as Modulos from "./ejercicio2Modulos.js";

window.onload = function () {
  //Me creo un curso.
  var curso = new Curso.Curso("2-DAW", "Aula 23", "3", "2");

  //Me creo dos alumnos.
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

  //Creo un array de profesores (los que impartirás DWC).
  var profesoresDWC = new Array();

  //Me creo tres profesores.
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

  //Al array de profesoresDWC le añado los profesores que la imparten.
  profesoresDWC.push(profesorUno, profesorTres);

  //Creo un array dónde almacenaré todos los módulos.
  var arrayModulosAlumnoUno = new Array();

  //Creo los tres módulos.
  var moduloDWC = new Modulos.Modulos("DWC", 128);
  var moduloDWS = new Modulos.Modulos("DWS", 96);
  var moduloDIW = new Modulos.Modulos("DIW", 102);

  //Añado los profesores al módulo.
  moduloDWC.anyadirProfesorado(profesoresDWC);

  moduloDWS.anyadirProfesorado(profesorDos);

  moduloDIW.anyadirProfesorado(profesorTres);

  //Añado todos los módulos al array.
  arrayModulos.push(moduloDWC, moduloDWS, moduloDIW);

  //Matriculo los alumnos al curso.
  curso.matricularAlumno(alumnoUno);

  curso.matricularAlumno(alumnoDos);

  //Añado los módulos al curso.
  curso.anyadirModulos(arrayModulos);

  //Añado los módulos de cada alumno.
  alumnoUno.anyadirModulos(arrayModulos);
  alumnoDos.anyadirModulos(moduloDWS);

  //Muestro los profesores.
  curso.mostrarProfesores();

  //Muestro los alumnos en orden descendente.
  curso.mostrarAlumnos("descendente");

  //Muestro el informe del curso.
  curso.informeCurso();
};
