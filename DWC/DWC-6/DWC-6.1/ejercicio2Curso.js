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

  /**
   *
   * @returns Devuelvo la nota media de todos los alumnos matriculados.
   */
  notaMedia() {
    let notaMedia = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      notaMedia += this.alumnos[i].notaMedia;
    }
    return notaMedia / this.alumnos.length;
  }

  /**
   * Si el parámetro introducido es un objeto alumno, lo añado al array y muestro
   * el nombre del alumno matriculado por pantalla.
   * @param {Alumno} alumno
   */
  matricularAlumno(alumno) {
    let body = document.getElementById("body");
    let p = document.createElement("p");
    if (alumno.constructor.name == "Alumnado") {
      this.alumnos.push(alumno);
      p.innerHTML = `Alumno '${alumno.nombre}' añadido correctamente`;
      body.appendChild(p);
    }
  }

  /**
   * Si el parámetro introducido es un objeto módulo, lo añado al array y muestro
   * el nombre del módulo por pantalla.
   * @param {Modulos} modulos
   */
  anyadirModulos(modulos) {
    let body = document.getElementById("body");
    //Si se ha pasado un array de módulosm entro en la condición.
    if (modulos.length != undefined) {
      for (let i = 0; i < modulos.length; i++) {
        //Valido si el objeto es uno de tipo módulo.
        if (modulos[i].constructor.name == "Modulos") {
          //Lo añado al array.
          this.modulos.push(modulos[i]);
          let p = document.createElement("p");
          p.innerHTML = `Modulo '${modulos[i].nombre}' añadido correctamente`;
          body.appendChild(p);
        }
      }
    } else {
      //Valido si el objeto es uno de tipo módulo.
      if (modulos.constructor.name == "Modulos") {
        //Lo añado al array.
        this.modulos.push(modulos);
        let p = document.createElement("p");
        p.innerHTML = `Modulo '${modulos.nombre}' añadido correctamente`;
        body.appendChild(p);
      }
    }
  }

  mostrarAlumnosOrdenados(maneraOrdenar) {
    //Me creo un nuevo array.
    let alumnosOrdenados = new Array();

    //Almaceno el nombre y los apellidos de los alumnos.
    for (let i = 0; i < this.alumnos.length; i++) {
      alumnosOrdenados[
        i
      ] = `${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`;
    }

    //Los ordeno ascendentemente.
    alumnosOrdenados.sort();

    //Me creo los elementos iniciales de la taba¡la
    let body = document.getElementById("body");
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");
    celdaEnunciado.className = "tituloTabla";

    //Si se ha especificado que la manera de ordenar va a ser descendente, le doy la vuelta al array.
    if (maneraOrdenar == "descendente") {
      alumnosOrdenados.reverse();
      celdaEnunciado.innerHTML =
        "ALUMNOS ORDENADOS POR EL NOMBRE DESCENDENTEMENTE";
    } else {
      celdaEnunciado.innerHTML =
        "ALUMNOS ORDENADOS POR EL NOMBRE ASCENENTEMENTE";
    }

    //Añado la fila a la tabla.
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);

    /**
     * Defino un bucle en el que se van a crear tantas celdas como alumnos, y estas celdas se van a insertar
     * en la tabla.
     */
    for (let i = 0; i < alumnosOrdenados.length; i++) {
      fila = document.createElement("tr");
      let celda = document.createElement("td");

      celda.innerHTML = alumnosOrdenados[i];
      fila.appendChild(celda);
      tabla.appendChild(fila);
      this.alumnos[i].modulos.length;
    }

    //Añado al body tanto la tabla como un salto de línea.
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
    celdaEnunciado.className = "tituloTabla";
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
  devolverElemento(elemento) {
    return document.createElement(elemento);
  }

  mostrarCurso() {
    let body = document.getElementById("body");

    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    celdaEnunciado.colSpan = 4;
    celdaEnunciado.innerHTML = "CURSO";
    celdaEnunciado.className = "tituloTabla";

    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);
    fila = document.createElement("tr");

    for (const key in this) {
      if (key != "modulos" && key != "alumnos") {
        celdaEnunciado = document.createElement("th");
        celdaEnunciado.innerHTML = key;
        fila.appendChild(celdaEnunciado);
        tabla.appendChild(fila);
      }
    }

    fila = document.createElement("tr");
    for (const key in this) {
      if (key != "modulos" && key != "alumnos") {
        let celda = document.createElement("td");
        celda.innerHTML = this[key];
        fila.appendChild(celda);
        tabla.appendChild(fila);
      }
    }

    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  mostrarDatosAlumnos() {
    let body = document.getElementById("body");

    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    celdaEnunciado.colSpan = 4;
    celdaEnunciado.innerHTML = "DATOS ALUMNOS";
    celdaEnunciado.className = "tituloTabla";

    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);
    fila = document.createElement("tr");
    let celdaNombre = document.createElement("th");
    celdaNombre.innerHTML = "Nombre";
    fila.appendChild(celdaNombre);

    let celdaModulo = document.createElement("th");
    celdaModulo.innerHTML = "Módulos";
    celdaModulo.colSpan = this.alumnos[0].modulos.length;
    fila.appendChild(celdaModulo);
    tabla.appendChild(fila);
    for (let i = 0; i < this.alumnos.length; i++) {
      fila = document.createElement("tr");
      let celda = document.createElement("td");

      celda.innerHTML = `${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`;
      fila.appendChild(celda);
      for (let j = 0; j < this.alumnos[i].modulos.length; j++) {
        celda = document.createElement("td");
        celda.innerHTML = this.alumnos[i].modulos[j]["nombre"];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  mostrarDatosModulos() {
    let body = document.getElementById("body");

    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    celdaEnunciado.colSpan = 4;
    celdaEnunciado.innerHTML = "DATOS MODULOS";
    celdaEnunciado.className = "tituloTabla";

    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);
    fila = document.createElement("tr");
    let celdaNombre = document.createElement("th");
    celdaNombre.innerHTML = "Modulo";
    fila.appendChild(celdaNombre);

    let celdaModulo = document.createElement("th");
    celdaModulo.innerHTML = "Profesores";
    celdaModulo.colSpan = this.modulos[0].profesorado.length;
    fila.appendChild(celdaModulo);
    tabla.appendChild(fila);
    for (let i = 0; i < this.modulos.length; i++) {
      fila = document.createElement("tr");
      let celda = document.createElement("td");
      celda.innerHTML = this.modulos[i]["nombre"];
      fila.appendChild(celda);
      for (let j = 0; j < this.modulos[i].profesorado.length; j++) {
        let celda = document.createElement("td");
        celda.innerHTML = this.modulos[i].profesorado[j]["nombre"];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  informeCurso() {
    let body = document.getElementById("body");
    let tituloInforme = this.devolverElemento("h2");
    tituloInforme.innerHTML = "INFORME CURSO";
    tituloInforme.className = "titulos";
    body.appendChild(tituloInforme);
    this.mostrarCurso();
    this.mostrarDatosAlumnos();
    this.mostrarDatosModulos();
  }
}
