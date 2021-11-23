"use strict";

export class Modulos {
  constructor(nombre, numHoras) {
    this.nombre = nombre;
    this.numHoras = numHoras;
    this.profesorado = new Array();
  }

  anyadirProfesorado(profesorado) {
    if (profesorado.length != undefined) {
      for (let i = 0; i < profesorado.length; i++) {
        if (profesorado[i].constructor.name == "Profesorado") {
          this.profesorado.push(profesorado[i]);
        }
      }
    } else {
      if (profesorado.constructor.name == "Profesorado") {
        this.profesorado.push(profesorado);
      }
    }
  }
}
