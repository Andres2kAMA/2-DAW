"use strict";

//Ejercicio 4 - Fechas

/**
 *
 * @returns Devuelve la fecha formateada
 */
function devolverFechaFortamateada() {
  //Creo un objeto fecha
  let fechaSinFormatear = new Date();

  /**
   * Devuelvo la fecha con los datos actuales en el orden elegido.
   * El formato elegido es: DIA / MES / AÑO - HORA:MINUTOS:SEGUNDOS
   */
  return `Hoy es el ${fechaSinFormatear.getDate()}/${
    fechaSinFormatear.getMonth() + 1
  }/${fechaSinFormatear.getFullYear()},y son las ${fechaSinFormatear.getHours()}:${fechaSinFormatear.getMinutes()}:${fechaSinFormatear.getSeconds()}.`;
}

/**
 * Esta función cogerá la fecha formateada y la mostrará
 */
function mostrarFecha() {
  let fecha = devolverFechaFortamateada();
  console.log(fecha);
}

//Llamo a la función
mostrarFecha();
