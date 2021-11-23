"use strict";

//Reto B - Buscaminas

let buscaminas = [];
buscaminas[0] = [-1, 0, 0, 0];
buscaminas[1] = [0, 0, 0, 0];
buscaminas[2] = [0, -1, 0, 0];
buscaminas[3] = [0, 0, 0, 0];

/**
 *
 * @param {Array[][]} buscaminas
 */
function imprimirBuscaminas(buscaminas) {
  let filaBuscaminas = "[ ";
  for (let i = 0; i < buscaminas.length; i++) {
    for (let j = 0; j < buscaminas[i].length; j++) {
      if (j == buscaminas[i].length - 1) {
        filaBuscaminas += buscaminas[i][j] + " ]";
      } else {
        filaBuscaminas += buscaminas[i][j] + " | ";
      }
    }
    console.log(filaBuscaminas);
    filaBuscaminas = "[ ";
  }
  console.log();
}

/**
 *
 * @param {Int} fila
 * @returns Devuelve 'true' si la fila introducida es la primera
 */
function esPrimeraFila(fila) {
  return 0 == fila;
}

/**
 *
 * @param {Array[][]} buscaminas
 * @param {Int} fila
 * @returns Devuelve 'true' si la fila introducida es la última
 */
function esUltimaFila(buscaminas, fila) {
  return buscaminas.length - 1 == fila;
}

/**
 *
 * @param {Int} columna
 * @returns Devuelve 'true' si la columna introducida es la primera
 */
function esPrimeraColumna(columna) {
  return 0 == columna;
}

/**
 *
 * @param {Array[][]} buscaminas
 * @param {*} columna Devuelve 'true' si la columna introducida es la última
 * @returns
 */
function esUltimaColumna(buscaminas, columna) {
  return buscaminas[0].length - 1 == columna;
}

/**
 *
 * @param {Array[][]} buscaminas
 * @returns Devuelve un array [][] del tamaño del buscaminas
 *          con 0s en todas las posiciones
 *
 */
function devolverCuadranteVacio(buscaminas) {
  let cuadranteVacio = [];
  for (let fila of buscaminas) cuadranteVacio.push([...fila]);
  return cuadranteVacio;
}

/**
 *
 * @param {Array[][]} buscaminas
 * @param {Int} fila
 * @param {Int} columna
 * @param {Int} filaLimite
 * @param {Int} columnaLimite
 * @returns Devuelve un array[] con los números adyacentes
 */
function devolverNumerosAdyacentes(
  buscaminas,
  fila,
  columna,
  filaLimite,
  columnaLimite
) {
  let numerosAdyacentes = [];
  for (let i = fila; i <= filaLimite; i++) {
    for (let j = columna; j <= columnaLimite; j++) {
      numerosAdyacentes.push(buscaminas[i][j]);
    }
  }
  return numerosAdyacentes;
}

/**
 *
 * @param {Array[][]} buscaminas
 * @param {Int} fila
 * @param {Int} columna
 * @returns Devuelve un array al cual
 *          se le han introducido los números adyacentes según la
 *          posición del array
 */
function devolverCuadranteBuscaminas(buscaminas, fila, columna) {
  let cuadranteBuscaminas = [];

  if (esPrimeraFila(fila) && esUltimaFila(buscaminas, fila)) {
    if (esPrimeraColumna(columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna,
        fila,
        columna + 1
      );
    } else if (esUltimaColumna(buscaminas, columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna - 1,
        fila,
        columna
      );
    } else {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna - 1,
        fila,
        columna + 1
      );
    }
  } else if (esPrimeraFila(fila)) {
    if (esPrimeraColumna(columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna,
        fila + 1,
        columna + 1
      );
    } else if (esUltimaColumna(buscaminas, columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna - 1,
        fila + 1,
        columna
      );
    } else {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila,
        columna - 1,
        fila + 1,
        columna + 1
      );
    }
  } else if (esUltimaFila(buscaminas, fila)) {
    if (esPrimeraColumna(columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna - 1,
        fila,
        columna + 1
      );
    } else if (esUltimaColumna(buscaminas, columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna - 1,
        fila,
        columna
      );
    } else {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna - 1,
        fila,
        columna + 1
      );
    }
  } else {
    if (esPrimeraColumna(columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna,
        fila + 1,
        columna + 1
      );
    } else if (esUltimaColumna(buscaminas, columna)) {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna - 1,
        fila + 1,
        columna
      );
    } else {
      cuadranteBuscaminas = devolverNumerosAdyacentes(
        buscaminas,
        fila - 1,
        columna - 1,
        fila + 1,
        columna + 1
      );
    }
  }
  return cuadranteBuscaminas;
}

/**
 *
 * @param {Array[]} numerosAdyacentes
 * @returns Devuelve un entero con las minas adyacentes
 */
function comprobarMinasAdyacentes(numerosAdyacentes) {
  let minasAdyacentes = 0;
  numerosAdyacentes.forEach((numero) => {
    if (numero == -1) minasAdyacentes++;
  });
  return minasAdyacentes;
}

/**
 *
 * @param {Array[][]} buscaminas
 */
function comprobarBuscaminas(buscaminas) {
  let solucionBuscaminas = devolverCuadranteVacio(buscaminas);
  for (let i = 0; i < buscaminas.length; i++) {
    for (let j = 0; j < buscaminas[i].length; j++) {
      if (buscaminas[i][j] != -1) {
        solucionBuscaminas[i][j] = comprobarMinasAdyacentes(
          devolverCuadranteBuscaminas(buscaminas, i, j)
        );
      }
    }
  }
  imprimirBuscaminas(solucionBuscaminas);
}

imprimirBuscaminas(buscaminas);
comprobarBuscaminas(buscaminas);
