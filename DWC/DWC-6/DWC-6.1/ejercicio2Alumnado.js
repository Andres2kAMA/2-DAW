"use strict";

export class Alumnado {
  /**
   * Defino un constructor que va a almacenar el:
   *  ->DNI.
   *  ->Nombre.
   *  ->Apellidos.
   *  ->Fecha de nacimiento.
   *  ->Nota media.
   * @param {String} Dni
   * @param {String} nombre
   * @param {String} apellidos
   * @param {String} fechaNacimiento
   * @param {int} notaMedia
   */
  constructor(Dni, nombre, apellidos, fechaNacimiento, notaMedia) {
    this.Dni = Dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.notaMedia = notaMedia;
    this.modulos = new Array();
  }

  /**
   * Cambio el valor de la nota media.
   * @param {int} notaMedia
   */
  setNotaMedia(notaMedia) {
    this.notaMedia = notaMedia;
  }

  /**
   *
   * @returns Devuelvo la nota media.
   */
  getNotaMedia() {
    return this.notaMedia;
  }

  /**
   *
   * @returns Devuelvo 'true' si es mayor de edad.
   */
  comprobarMayorEdad() {
    let anyo = this.fechaNacimiento.split("/")[2];
    if (2021 - anyo >= 18) {
      return true;
    }
    return false;
  }

  /**
   * Añado al array de módulos el/los módulos indicado/s por parámetro.
   * @param {Modulos} modulos
   */
  anyadirModulos(modulos) {
    //Si se ha enviado un array de módulos entro en la condición.
    if (modulos.length != undefined) {
      for (let i = 0; i < modulos.length; i++) {
        //Si se ha enviado un objeto módulo, entro en la condición.
        if (modulos[i].constructor.name == "Modulos") {
          //Añado el módulo al array.
          this.modulos.push(modulos[i]);
        }
      }
    } else {
      //Si se ha enviado un objeto módulo, entro en la condición.
      if (modulos.constructor.name == "Modulos") {
        //Añado el módulo al array.
        this.modulos.push(modulos);
      }
    }
  }
}
