"use strict";

export class Curso {
  /**
   * Defino un constructor que va a almacenar:
   *  ->El nombre
   *  ->El número del aula
   *  ->El número de módulos
   *  ->El número de los alumanos
   *  ->Un array de módulos
   *  ->Un array de alumnos
   * @param {*} nombre
   * @param {*} numAula
   * @param {*} numModulos
   * @param {*} numAlumnados
   */
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

  /**
   * Muestro todos los profesores contratados.
   */
  mostrarProfesores() {
    //Me almaceno el body.
    let body = document.getElementById("body");

    //Creo los elementos de la tabla básicos
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    //Indico el el enunciado tabla ocupará 4 columnas.
    celdaEnunciado.colSpan = 4;

    //Le inserto un texto y una clase.
    celdaEnunciado.innerHTML = "PROFESORES";
    celdaEnunciado.className = "tituloTabla";

    //Añado la celda a la tabla.
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);

    //Recorro los módulos.
    for (let i = 0; i < this.modulos.length; i++) {
      //Recorro los profesores de cada módulo.
      for (let j = 0; j < this.modulos[i].profesorado.length; j++) {
        //Creo una fila.
        fila = document.createElement("tr");
        //Inserto una fila con las keys del objeto.
        for (const key in this.modulos[i].profesorado[j]) {
          celdaEnunciado = document.createElement("th");
          celdaEnunciado.innerHTML = key;
          fila.appendChild(celdaEnunciado);
          tabla.appendChild(fila);
        }

        //Creo otra fila.
        fila = document.createElement("tr");

        //Inserto en la fila los datos de un profesor en concreto.
        for (const key in this.modulos[i].profesorado[j]) {
          let celda = document.createElement("td");
          celda.innerHTML = this.modulos[i].profesorado[j][key];
          fila.appendChild(celda);
          tabla.appendChild(fila);
        }
      }
    }

    //Añado al body tanto la tabla como un salto de línea.
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  /**
   * Esta función mostrará los datos del curso.
   */
  mostrarCurso() {
    //Me almaceno el body.
    let body = document.getElementById("body");

    //Me creo los elementos básicos de la tabla
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    //Indico que el título de la tabla ocupe 4 columnas.
    celdaEnunciado.colSpan = 4;

    //Le inserto al título de la tabla un texto y una clase.
    celdaEnunciado.innerHTML = "CURSO";
    celdaEnunciado.className = "tituloTabla";

    //Añado la celda a la tabla.
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);

    //Me creo una fila.
    fila = document.createElement("tr");

    //En la fila le añado tantas celdas como keys haya. (NO AÑADO LOS ARRAYS)
    for (const key in this) {
      if (key != "modulos" && key != "alumnos") {
        celdaEnunciado = document.createElement("th");
        celdaEnunciado.innerHTML = key;
        fila.appendChild(celdaEnunciado);
        tabla.appendChild(fila);
      }
    }

    //Creo otra fila
    fila = document.createElement("tr");

    //En la fila creada inserto tantas celdas como datos haya. (NO AÑADO LOS ARRAYS)
    for (const key in this) {
      if (key != "modulos" && key != "alumnos") {
        let celda = document.createElement("td");
        celda.innerHTML = this[key];
        fila.appendChild(celda);
        tabla.appendChild(fila);
      }
    }

    //Inserto en el body tanto la tabla como un salto de línea.
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  /**
   * Esta función mostrará el nombre y apellidos de cada alumno, junto a los módulos
   * en los que están matriculados.
   */
  mostrarDatosAlumnos() {
    //Me almaceno el body.
    let body = document.getElementById("body");

    //Creo los datos básicos de la tabla.
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    //Indico que el título de la tabla ocupe 4 columnas.
    celdaEnunciado.colSpan = 4;

    //Le inserto al título un texto y una clase.
    celdaEnunciado.innerHTML = "DATOS ALUMNOS";
    celdaEnunciado.className = "tituloTabla"; //Le indico un texto y lo añado a la fila.
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);

    //Creo una fila.
    fila = document.createElement("tr");

    //Creo un th.
    let celdaNombre = document.createElement("th");

    //Le indico un texto y lo añado a la fila.
    celdaNombre.innerHTML = "Nombre";
    fila.appendChild(celdaNombre);

    //Creo un th.
    let celdaModulo = document.createElement("th");
    //Le indico un texto, un tamaño de columnas y lo añado a la fila.
    celdaModulo.innerHTML = "Módulos";
    celdaModulo.colSpan = this.alumnos[0].modulos.length;
    fila.appendChild(celdaModulo);

    //Añado la fila a la tabla
    tabla.appendChild(fila);

    //Recorro los alumnos.
    for (let i = 0; i < this.alumnos.length; i++) {
      //Creo tanto una fila como una celda por cada iteración.
      fila = document.createElement("tr");
      let celda = document.createElement("td");

      //Añado a la celda el nombre y apellidos del alumno.
      celda.innerHTML = `${this.alumnos[i].nombre} ${this.alumnos[i].apellidos}`;

      //Inserto la celda en la fila.
      fila.appendChild(celda);

      //Recorros los módulos de cada alumno
      for (let j = 0; j < this.alumnos[i].modulos.length; j++) {
        //En cada celda creada añadiré eñ nombre del módulo.
        celda = document.createElement("td");
        celda.innerHTML = this.alumnos[i].modulos[j]["nombre"];
        fila.appendChild(celda);
      }
      //Añado la fila a la tabla.
      tabla.appendChild(fila);
    }

    //Al body le añado tanto la tabla como un salto de línea.
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  /**
   * Este método mostrará el nombre de los módulos y los profesores que los imparten,
   */
  mostrarDatosModulos() {
    //Me almaceno el body
    let body = document.getElementById("body");

    //Creo los datos básicos de la tabla.
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let celdaEnunciado = document.createElement("th");

    //Le indico que el titulo de la tabla ocupe 4 columnas.
    celdaEnunciado.colSpan = 4;

    //Le inserto tanto un texto como una clase.
    celdaEnunciado.innerHTML = "DATOS MODULOS";
    celdaEnunciado.className = "tituloTabla";

    //Inserto la celda en la tabla
    fila.appendChild(celdaEnunciado);
    tabla.appendChild(fila);

    //Creo una fila y una celda
    fila = document.createElement("tr");
    let celdaNombre = document.createElement("th");

    //A la celda le indico un texto y lo añado a la fila.
    celdaNombre.innerHTML = "Modulo";
    fila.appendChild(celdaNombre);

    //Creo otra celda.
    let celdaModulo = document.createElement("th");

    //A la celda le añado un texto, un ancho y lo añado a la fila.
    celdaModulo.innerHTML = "Profesores";
    celdaModulo.colSpan = this.modulos[0].profesorado.length;
    fila.appendChild(celdaModulo);

    //Añado la fila a la tabla
    tabla.appendChild(fila);

    //Recorro los módulos
    for (let i = 0; i < this.modulos.length; i++) {
      //Creo tanto una fila como una celda.
      fila = document.createElement("tr");
      let celda = document.createElement("td");

      //Añado a la celda el nombre del módulo y lo inserto en la fila.
      celda.innerHTML = this.modulos[i]["nombre"];
      fila.appendChild(celda);

      //Recorro los profesores.
      for (let j = 0; j < this.modulos[i].profesorado.length; j++) {
        //Creo una celda en la que le inserto el nombre de los profesores.
        let celda = document.createElement("td");
        celda.innerHTML = this.modulos[i].profesorado[j]["nombre"];
        fila.appendChild(celda);
      }

      //Añado la fila a la tabla.
      tabla.appendChild(fila);
    }

    //Añado la tabla al body e inserto un salto de línea.
    body.appendChild(tabla);
    body.appendChild(document.createElement("br"));
  }

  /**
   * Este método imprimirá todos los datos del curso.
   */
  informeCurso() {
    let body = document.getElementById("body");
    let tituloInforme = document.createElement("h2");
    tituloInforme.innerHTML = "INFORME CURSO";
    tituloInforme.className = "titulos";
    body.appendChild(tituloInforme);
    this.mostrarCurso();
    this.mostrarDatosAlumnos();
    this.mostrarDatosModulos();
  }
}
