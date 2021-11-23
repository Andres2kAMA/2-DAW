"use strict";

//Ejercicio 4 -Tabla dinámica DOM

/**
 * Me traigo el body de la tabla, que será donde añada las filas.
 */
var bodyTabla = document.getElementById("bodyTabla");

/**
 * Me traigo todos los botones, y establezco que el botón para añadir la fila
 * es el primero.
 */
var botones = document.getElementsByTagName("button");
var botonFila = botones[0];

var contador = 1;

/**
 *
 */
function anyadirFila() {
  /**
   * Me creo un tr, dos td y un botón.
   */
  var tr = document.createElement("tr");
  var tdFila = document.createElement("td");
  var tdBoton = document.createElement("td");
  var boton = document.createElement("button");

  /**
   * Al td de la fila le añado:
   *    -> Un id con el número de la fila
   *    -> Un class para colorearlo mediante el css
   */
  tdFila.id = `fila${contador}`;
  tdFila.className = "colorear";

  /**
   * Al botón le añado:
   *    -> Una función 'onclick' al que le entra el nº de la fila como parámetro.
   *    -> Un id con el número del botón
   *    -> El texto "Caniar"
   */
  boton.setAttribute("onclick", ` toCani(fila${contador})`);
  boton.id = `boton${contador}`;
  boton.innerHTML = "Caniar";

  //Añado el botón a la fila donde se tiene que insertar el botón
  tdBoton.appendChild(boton);

  //Me traigo el valor del input
  var valorInput = document.getElementById("texto").value;

  //Hago que ese valor sea un nodo de texto
  valorInput = document.createTextNode(valorInput);

  //Añado el texto a la fila
  tdFila.appendChild(valorInput);

  //Añado ambas filas al tr
  tr.appendChild(tdFila);
  tr.appendChild(tdBoton);

  //Añado el tr al body de la tabla
  bodyTabla.appendChild(tr);

  //Aumento en 1 el valor del contador
  contador++;
}

/**
 *
 * @param {String} cadena
 * @returns Devuelve la cadena modificada, cambiando las 'C' por 'K'.
 */
function modificarCaracteresCadena(cadena) {
  let cadenaSeparada = "";

  for (let i = 0; i < cadena.length; i++) {
    if (cadena.substring(i, i + 1).toUpperCase() == "C") {
      cadenaSeparada += "k";
    } else {
      cadenaSeparada += cadena.substring(i, i + 1);
    }
  }
  return cadenaSeparada;
}

/**
 *
 * @param {ID} fila
 */
function toCani(fila) {
  //Selecciono la fila con el 'id'.
  var td = document.getElementById(fila.id);

  /**
   * Separo la fila en 2 partes:
   *  ->1º: Contentrá los carácteres "fil";
   *  ->2ª: Contendrá el nº de la fila
   */
  var numeroID = td.id.split("a");

  //Seleeciono el botón que ha sido pulsado y lo deshabilito
  var boton = document.getElementById(`boton${numeroID[1]}`);
  boton.setAttribute("disabled", "true");

  //Me almaceno el texto de la fila en una variable
  var texto = td.innerHTML;

  //Borro el texto que estaba almacenado anteriormente
  td.innerHTML = null;

  //Modifico la cadena
  let cadenaSeparada = modificarCaracteresCadena(texto);
  let cadenaCani = "";

  //Los índices pares los guardo en mayúscula y los impares en minúscula
  for (let i = 0; i < cadenaSeparada.length; i++) {
    if (i % 2 == 0) {
      cadenaCani += cadenaSeparada[i].toUpperCase();
    } else {
      cadenaCani += cadenaSeparada[i].toLowerCase();
    }
  }

  //Añado 3 'H's a la cadena
  cadenaCani += "HHH";

  //Inserto en la fila el texto convertido en Cani
  td.appendChild(document.createTextNode(cadenaCani));
}

/**Inserto un evento al botón que añade las filas. Al pulsar el botón,
 * se ejecutará la función 'anyadirFila()'.
 *
 */
botonFila.addEventListener("click", anyadirFila, false);
