"use strict";

export class Modulos {
  /**
   * Defino un constructor que va a almacenar el:
   *  ->Nombre.
   *  ->El número de horas.
   *  ->Un array de profesores.
   * @param {String} nombre
   * @param {int} numHoras
   */
  constructor(nombre, numHoras) {
    this.nombre = nombre;
    this.numHoras = numHoras;
    this.profesorado = new Array();
  }

  /**
   * Añado al array de los profesores el/los profesores indicado/s por parámetro.
   * @param {*} profesorado
   */
  anyadirProfesorado(profesorado) {
    //Si se ha enviado un array de profesores, entro en la condición.
    if (profesorado.length != undefined) {
      for (let i = 0; i < profesorado.length; i++) {
        //Si lo que se ha pasado pertenece al objeto 'Profesorado', entro en la condición:
        if (profesorado[i].constructor.name == "Profesorado") {
          //Añado el profesor al array.
          this.profesorado.push(profesorado[i]);
        }
      }
    } else {
      //Si lo que se ha pasado pertenece al objeto 'Profesorado', entro en la condición:
      if (profesorado.constructor.name == "Profesorado") {
        //Añado el profesor al array.
        this.profesorado.push(profesorado);
      }
    }
  }
}
