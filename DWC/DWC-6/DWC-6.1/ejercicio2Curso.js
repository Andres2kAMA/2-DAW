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
    let body = document.getElementById("body");
    let p = document.createElement("p");
    if (alumno.constructor.name == "Alumnado") {
      this.alumnos.push(alumno);
      p.innerHTML = `Alumno '${alumno.nombre}' añadido correctamente`;
      body.appendChild(p);
    }
  }
  anyadirModulos(modulos) {
    let body = document.getElementById("body");
    if (modulos.length != undefined) {
      for (let i = 0; i < modulos.length; i++) {
        let p = document.createElement("p");
        if (modulos[i].constructor.name == "Modulos") {
          this.modulos.push(modulos[i]);
          p.innerHTML = `Modulo '${modulos[i].nombre}' añadido correctamente`;
          body.appendChild(p);
        }
      }
    } else {
      let p = document.createElement("p");
      if (modulos.constructor.name == "Modulos") {
        this.modulos.push(modulos);
        p.innerHTML = `Modulo '${modulos.nombre}' añadido correctamente`;
        body.appendChild(p);
      }
    }
  }

  mostrarAlumnos(maneraOrdenar) {
    let alumnosOrdenados = new Array();
    let body = document.getElementById("body");

    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    for (let i = 0; i < this.alumnos.length; i++) {
      alumnosOrdenados[
        i
      ] = `${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`;
    }

    alumnosOrdenados.sort();

    if (maneraOrdenar == "descendente") {
      alumnosOrdenados.reverse();
      celdaEnunciado.innerHTML =
        "ALUMNOS ORDENADOS POR EL NOMBRE DESCENDENTEMENTE";
    } else {
      celdaEnunciado.innerHTML =
        "ALUMNOS ORDENADOS POR EL NOMBRE ASCENENTEMENTE";
    }

    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);
    for (let i = 0; i < alumnosOrdenados.length; i++) {
      fila = document.createElement("tr");
      let celda = document.createElement("th");

      celda.innerHTML = alumnosOrdenados[i];
      fila.appendChild(celda);
      tabla.appendChild(fila);
    }
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
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
    body.appendChild(document.createElement("br"));
  }

  devolverTamanyoMaximoInforme() {
    let longitudCadaAlumno = new Array();
    for (let i = 0; i < this.alumnos.length; i++) {
      for (let j = 0; j < 1; j++) {
        for (let z = 0; z < 1; z++) {
          longitudCadaAlumno[i] =
            1 +
            this.alumnos[i].modulos.length +
            this.alumnos[i].modulos[j].profesorado.length;
        }
      }
    }
    return longitudCadaAlumno;
  }
  informeCurso() {
    let body = document.getElementById("body");
    let tabla = document.createElement("table");
    let tamanyoMaxInforme = this.devolverTamanyoMaximoInforme();
    let fila = document.createElement("tr");
    let celdaNegrita = document.createElement("th");
    celdaNegrita.colSpan = tamanyoMaxInforme[0] + 1;
    celdaNegrita.innerHTML = this.nombre;
    fila.appendChild(celdaNegrita);
    tabla.appendChild(fila);
    for (let i = 0; i < this.alumnos.length; i++) {
      celdaNegrita = document.createElement("th");
      celdaNegrita.innerHTML = "Nombre";
      fila = document.createElement("tr");
      let celda = document.createElement("td");
      celda.innerHTML = `${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`;
      fila.appendChild(celdaNegrita);
      fila.appendChild(celda);
      for (let j = 0; j < this.alumnos[i].modulos.length; j++) {
        celda = document.createElement("td");
        celda.innerHTML = this.alumnos[i].modulos[j]["nombre"];
        fila.appendChild(celda);
        for (
          let z = 0;
          z < this.alumnos[i].modulos[j].profesorado.length;
          z++
        ) {
          celda = document.createElement("td");

          for (const key in this.alumnos[i].modulos[j].profesorado[z]) {
            celda.innerHTML =
              this.alumnos[i].modulos[j].profesorado[z]["nombre"];
            fila.appendChild(celda);
          }
          tabla.appendChild(fila);
        }
      }
    }
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }
}
