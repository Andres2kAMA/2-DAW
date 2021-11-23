"use strict";

export class Profesorado {
  /**
   *Defino un constructor que va almacenar el:
    ->DNI
    ->Nombre
    ->Apellidos
    ->Fecha de nacimiento
   * @param {String} Dni
   * @param {String} nombre
   * @param {String} apellidos
   * @param {String} fechaNacimiento
   */
  constructor(Dni, nombre, apellidos, fechaNacimiento) {
    this.Dni = Dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
  }
}
