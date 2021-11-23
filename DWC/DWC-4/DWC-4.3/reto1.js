"use strict";

//Ejercicio 1 - Pintarrajea

//Le inserto un evento al input que utilizará el usuario para seleccionar el color
document
  .getElementById("colorUsuario")
  .addEventListener("input", actualizarCeldaUsuario, false);

//Me almaceno en dos divs del HTML
var primerDiv = document.getElementById("primerDiv");
var segundoDiv = document.getElementById("segundoDiv");

/**
 * Función que crea una tabla 1*1 cuyo color de Fondo sea el
 * color seleccionado por el usuario
 */
function crearTablaIndicandoColorSeleccionado() {
  //Creo los elementos de la tabla
  let tabla = document.createElement("table");
  let fila = document.createElement("tr");
  let celda = document.createElement("td");

  //Le añado a la tabla un ID y una class
  tabla.id = "mostrarColor";
  tabla.className = "centrarTabla";

  //Indico que la celda tenga un tamaño y un ancho específico
  //Además, le añado un borde a la celda
  celda.style.height = 50 + "px";
  celda.style.width = 436 + "px";
  celda.style.border = "solid";

  //Añado la tabla al HTML
  fila.appendChild(celda);
  tabla.appendChild(fila);
  primerDiv.appendChild(tabla);
}

/**
 * Función que crea una tabla 1*6 que contendrá 6 colores
 * diferentes para elegir
 */
function crearTablaColores() {
  //Creo una tabla y una fila
  let tabla = document.createElement("table");
  let fila = document.createElement("tr");

  //Le añado a la tabla un ID y una class
  tabla.id = "tablaColores";
  tabla.className = "centrarTabla";

  //Hago un for que se repetirá 6 veces, en el que en cada
  //iteración se le añada a la celda un color específico
  for (let i = 0; i < 7; i++) {
    //Creo una etiqueta td
    let celda = document.createElement("td");

    //Le añado estilo
    celda.style.height = 50 + "px";
    celda.style.width = 50 + "px";
    celda.style.border = "solid";

    //Le añado un evento "click"
    celda.addEventListener("click", seleccionarColor, false);

    /**
     * Dependiendo de la iteración del bucle, el color de fondo de la
     * celda variará. Además, una vez indicado el color, añado
     * la celda a la fila
     */
    switch (i) {
      case 0:
        celda.style.backgroundColor = "crimson";
        fila.appendChild(celda);
        break;
      case 1:
        celda.style.backgroundColor = "gold";
        fila.appendChild(celda);
        break;
      case 2:
        celda.style.backgroundColor = "limegreen";
        fila.appendChild(celda);
        break;
      case 3:
        celda.style.backgroundColor = "Darkcyan";
        fila.appendChild(celda);
        break;
      case 4:
        celda.style.backgroundColor = "Darkmagenta";
        fila.appendChild(celda);
        break;
      case 5:
        celda.style.backgroundColor = "white";
        fila.appendChild(celda);
        break;
      case 6:
        //Esta celda variará con el colorElegido por el usuario
        celda.style.backgroundColor = devolverColorUsuario();
        fila.appendChild(celda);
        break;
    }
  }

  //Añado la tabla al HTML
  tabla.appendChild(fila);
  primerDiv.appendChild(tabla);

  crearTablaIndicandoColorSeleccionado();
}

/**
 * Esta función actualizará la celda que permitirá al usuario elegir el
 * color para pintar. Además, ese color se seleccionará para pintar
 * automáticamente.
 */
function actualizarCeldaUsuario() {
  let tablaColores = document.getElementById("tablaColores");
  let celdaACambiar = tablaColores.getElementsByTagName("td")[6];
  celdaACambiar.style.backgroundColor = devolverColorUsuario();

  let tablaMostrarColor = document.getElementById("mostrarColor");
  let celdaMostrarColor = tablaMostrarColor.getElementsByTagName("td")[0];
  celdaMostrarColor.style.backgroundColor = devolverColorUsuario();
}

/**
 *
 * @returns Devuelve el color elegido por el usuario en el input
 */
function devolverColorUsuario() {
  let colorUsuario = document.getElementById("colorUsuario").value;
  return colorUsuario;
}

/**
 * Función que indicará a usuario el color seleccionado
 */
function seleccionarColor() {
  let tabla = document.getElementById("mostrarColor");
  let celdaACambiar = tabla.getElementsByTagName("td")[0];
  celdaACambiar.style.backgroundColor = this.style.backgroundColor;
}

/**
 *
 * @returns Devuelve el color seleccionado por el usuario
 */
function colorSeleccionado() {
  let tabla = document.getElementById("mostrarColor");
  let celdaACambiar = tabla.getElementsByTagName("td")[0];
  return celdaACambiar.style.backgroundColor;
}

/**
 * Función que validará si se puede pintar. En caso afirmativo,
 * cambiara el color de la celda
 */
function cambiarColorCelda() {
  //Si se permite pintar, pintará el fondo de la celda con el color
  //que ha seleccionado el usuario
  if (permitirPintar()) {
    this.style.backgroundColor = colorSeleccionado();
  }
}

/**
 *
 * @returns Devolverá true si existe un elemento con el
 *          id "pintar"
 */
function permitirPintar() {
  if (document.getElementById("pintar") != null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Función que se ejecutará al clicar en la tabla. Si clica en ella
 * y está el id "pintar" lo elimina, si no lo añade.
 *
 * El objetivo de está función es añadir/eliminar a la tabla un ID.
 * Si está el ID "pintar", significará que el usuario ha cliclado
 * en la tabla y quiere pintar los elementos de ella.
 *
 * Cuando el usuario clica otra vez, y el id está puesto, lo elimina,
 * ya que el usuario quiere parar de colorear las celdas.
 */
function anyadirIDParaPintar() {
  if (this.id == "pintar") {
    this.id = null;
  } else {
    this.id = "pintar";
  }
}

//Función que cambiará con el color elegido en la celda en
//la que se clique
function cambiarColorCeldaSola() {
  this.style.backgroundColor = colorSeleccionado();
}

/**
 * Función que creará la tabla en la que se podrá colorear
 */
function crearTablaAPintar() {
  /**
   * Creo una etiqueta tabla en la que:
   *  ->Le añado una clase
   *  ->Le añado un evento
   */
  let tabla = document.createElement("table");
  tabla.className = "centrarTabla";
  tabla.addEventListener("click", anyadirIDParaPintar, false);

  /**
   * Inserto un bucle bidimensional para crear una tabla 30*60
   */
  for (let i = 0; i < 30; i++) {
    //Creo una fila
    let fila = document.createElement("tr");
    for (let j = 0; j < 60; j++) {
      /**
       * Creo una celda en la que:
       *  ->Le añado estilo
       *  ->Le añado un evento "mouseover"
       *  ->Le añado un evento "click"
       */
      let celda = document.createElement("td");
      celda.style.height = 10 + "px";
      celda.style.width = 10 + "px";
      celda.style.border = "solid";
      celda.style.backgroundColor = "white";
      celda.addEventListener("mouseover", cambiarColorCelda, false);
      celda.addEventListener("click", cambiarColorCeldaSola, false);

      //Añado la celda a la fila
      fila.appendChild(celda);
    }

    //Añado la fila a la tabla
    tabla.appendChild(fila);
  }

  //Muestro la tabla en el HTML
  segundoDiv.appendChild(tabla);
}

/**
 * Función que borrará el fondo de todas las celdas
 */
function borrarFondo() {
  let tablaAPintar = document.getElementsByTagName("table")[2];
  let celdas = tablaAPintar.getElementsByTagName("td");
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].style.backgroundColor = "white";
  }
}

/**
 * Almaceno en una variable el botón declarado en el HTML
 * en la que:
 *  ->Le añado un id
 *  ->Le añado un evento "click"
 */
function crearBoton() {
  let boton = document.getElementById("boton");
  boton.id = "modificarBoton";
  boton.addEventListener("click", borrarFondo, false);
}

//Llamo a las funciones de crear las tablas y el botón
crearTablaColores();
crearTablaAPintar();
crearBoton();
