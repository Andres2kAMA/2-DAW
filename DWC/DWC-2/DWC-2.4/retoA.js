"use strict";

//Reto A - Sudoku

let sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

let sudokuIncorrecto = [];
for (let fila of sudokuCorrecto) sudokuIncorrecto.push([...fila]);
sudokuIncorrecto[0][0] = 2;

/**
 *
 * @param {Array[]} filaAComprobar
 * @returns Devuelvo el valor de todos los elementos de la fila
 */
function comprobarFilas(filaAComprobar) {
  let valorFila = 0;
  filaAComprobar.forEach((fila) => {
    valorFila += fila;
  });
  return valorFila;
}

/**
 *
 * @param {Array[][]} sudokuAComprobar
 * @param {Int} fila
 * @returns Devuelvo un array[] con los números de la columna
 */
function devolverColumna(sudokuAComprobar, fila) {
  let columnaADevolver = [];

  for (let i = 0; i < sudokuAComprobar.length; i++) {
    columnaADevolver.push(sudokuAComprobar[i][fila]);
  }

  return columnaADevolver;
}

/**
 *
 * @param {Array[]} columnaAComprobar
 * @returns Devuelvo el valor de todos los elementos de la columna
 */
function comprobarColumnas(columnaAComprobar) {
  let valorColumna = 0;
  columnaAComprobar.forEach((columna) => {
    valorColumna += columna;
  });

  return valorColumna;
}

/**
 *
 * @param {Array[][]} sudokuAComprobar
 * @param {Int} fila
 * @param {Int} columna
 * @returns Devuelvo un array[] con los números del cuadrante
 */
function devolverCuadrante(sudokuAComprobar, fila, columna) {
  let cuadrante = [];
  for (let i = fila; i < fila + 3; i++) {
    for (let j = columna; j < columna + 3; j++) {
      cuadrante.push(sudokuAComprobar[i][j]);
    }
  }

  return cuadrante;
}

/**
 *
 * @param {Array[]} cuadranteAComprobar
 * @returns Devuelvo el valor de todos los elementos del cuadrante
 */
function comprobarCuadrante(cuadranteAComprobar) {
  let valorCuadrante = 0;
  cuadranteAComprobar.forEach((cuadrante) => {
    valorCuadrante += cuadrante;
  });

  return valorCuadrante;
}

/**
 *
 * @param {Array[]} elementoAComprobar
 * @returns Devuelvo un booleano dependiendo si el el valor de todas
 *          las filas, columnas o cuadrantes es el mismo (true) o
 *          es distinto (false)
 */
function elementoCorrecto(elementoAComprobar) {
  for (let i = 0; i < elementoAComprobar.length - 1; i++) {
    if (elementoAComprobar[i] != elementoAComprobar[i + 1]) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Array[]} valoresFilas
 * @param {Array[]} valoresColumnas
 * @param {Array[]} valoresCuadrantes
 */
function comprobarSolucion(valoresFilas, valoresColumnas, valoresCuadrantes) {
  if (elementoCorrecto(valoresFilas)) {
    if (elementoCorrecto(valoresColumnas)) {
      if (elementoCorrecto(valoresCuadrantes)) {
        console.log("¡¡Sudoku correcto!! ");
      } else {
        console.log("Sudoku incorrecto :(");
      }
    } else {
      console.log("Sudoku incorrecto :(");
    }
  } else {
    console.log("Sudoku incorrecto :(");
  }
}

/**
 *
 * @param {Array[][]} sudoku
 */
function imprimirSudoku(sudoku) {
  for (let i = 0; i < sudoku.length; i++) {
    let fila = "|";
    for (let j = 0; j < sudoku.length; j++) {
      if (j == 2 || j == 5 || j == 8) {
        fila += sudoku[i][j] + " | ";
      } else {
        fila += sudoku[i][j] + "   ";
      }
    }
    if (i % 3 == 0) {
      console.log("------------------------------------");
    }
    console.log(fila);
  }
  console.log("------------------------------------");
}

/**
 *
 * @param {Array[][]} sudokuAComprobar
 */
function comprobadorSodoku(sudokuAComprobar) {
  //Creo e inicializo las variables que voy a utilizar
  var valoresFilas = [];
  var valoresColumnas = [];
  var valoresCuadrantes = [];
  var contadorCuadrante = 0;

  for (let i = 0; i < sudokuAComprobar.length; i++) {
    /**
     * Se almacenará la suma de todos los elementos de la fila
     */
    valoresFilas.push(comprobarFilas(sudokuAComprobar[i]));

    for (let j = 0; j < sudokuAComprobar.length; j++) {
      /**
       * Si la i==0, almaceno la suma de todos los valores de la columna en un array
       */
      if (i == 0) {
        valoresColumnas.push(
          comprobarColumnas(devolverColumna(sudokuAComprobar, j))
        );
      }

      /**
       * Cuando el módulo 3 de la i y la j es 0
       * compruebo el cuadrante, y almaceno la suma
       * de todos los valores del cuadrante en un array
       */
      if (i % 3 == 0 && j % 3 == 0) {
        valoresCuadrantes.push(
          comprobarCuadrante(devolverCuadrante(sudokuAComprobar, i, j))
        );
        contadorCuadrante++;
      }
    }
  }

  imprimirSudoku(sudokuAComprobar);
  comprobarSolucion(valoresFilas, valoresColumnas, valoresCuadrantes);
  console.log();
}
comprobadorSodoku(sudokuCorrecto);

comprobadorSodoku(sudokuIncorrecto);
