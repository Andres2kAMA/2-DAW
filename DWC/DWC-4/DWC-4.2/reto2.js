"use strict";

//Ejercicio 2 - Primos DOM

//Selecciono el body
var body = document.querySelector("body");

/**
 *
 * @param {int} numeroAComprobar
 * @returns 'true' si el número es primp
 */
function esPrimo(numeroAComprobar) {
  if (numeroAComprobar == 0 || numeroAComprobar == 1) {
    return false;
  } else {
    for (let i = 2; i <= numeroAComprobar; i++) {
      if (numeroAComprobar % i == 0 && i != numeroAComprobar) {
        return false;
      }
    }
  }
  return true;
}

function marcarNumerosPrimos() {
  //Inabilito el boton, ya que los números ya estarán marcados
  //después de esta función
  let boton = document.getElementById("boton");
  boton.setAttribute("disabled", "true");

  /**
   * Creo una etiqueta style, en la que:
   *    ->Pongo el fondo rojo
   *    ->Pongo el número en negrita
   */
  let style = document.createElement("style");
  style.innerHTML = `.numeroPrimo {
    background-color: red;
    font-weight: bold;
  }`;

  //Añado la etiqueta style al final del body
  body.appendChild(style);
}

function crearTablaDinámica() {
  //Creo una tabla
  let table = document.createElement("table");

  let contador = 1;

  /**
   * Para que el tamaño de la tabla sea 100*100, creo dos bucles que
   * se ejecutarán cada uno 100 veces
   */
  for (let i = 0; i < 100; i++) {
    //Creo un tr
    let tr = document.createElement("tr");
    for (let j = 0; j < 100; j++) {
      //Creo un td al que le añado el número que indicará el nº de celdas
      let td = document.createElement("td");
      td.innerHTML = contador;

      //Si es primo, añado a la celda una clase
      if (esPrimo(contador)) {
        td.className = "numeroPrimo";
      }

      //Añado la celda a la fila
      tr.appendChild(td);

      //Aumento el valor del contador en 1
      contador++;
    }
    //Añado la fila a la tabla
    table.appendChild(tr);
  }
  //Añado la tabla al body
  body.appendChild(table);

  /**
   * Creo un botón al que:
   *    ->Le establezco un ID
   *    ->Le establezco un value
   *    ->Le establezco un tipo 'button'
   *    ->Le indico que cuando el botón sea pulsado se ejecute la
   *      función 'marcarNumerosPrimos()'
   */
  let boton = document.createElement("input");
  boton.id = "boton";
  boton.value = "Calcular números primos";
  boton.type = "button";
  boton.setAttribute("onclick", "marcarNumerosPrimos()");

  //Añado el botón al body
  body.appendChild(boton);
}

//Creo la tabla dinámicamente
crearTablaDinámica();
