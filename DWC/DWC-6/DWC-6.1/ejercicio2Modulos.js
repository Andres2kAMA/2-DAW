"use strict";

export class Modulos {
  constructor(nombre, numHoras) {
    this.nombre = nombre;
    this.numHoras = numHoras;
    this.profesorado = new Array();
  }

  anyadirProfesorado(profesorado) {
    if (Object.prototype(profesorado) == "Profesorado") {
      for (let i = 0; i < profesorado.length; i++) {
        this.profesorado.push(profesorado[i]);
      }
    }
  }
}
