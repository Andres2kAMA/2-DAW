"use strict";

export class Alumnado {
  constructor(Dni, nombre, apellidos, fechaNacimiento, notaMedia) {
    this.Dni = Dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.notaMedia = notaMedia;
    this.modulos = new Array();
  }

  setNotaMedia(notaMedia) {
    this.notaMedia = notaMedia;
  }
  //Esto es una prueba

  getNotaMedia() {
    return this.notaMedia;
  }

  getAnyoNacimiento() {
    return this.fechaNacimiento.split("/")[2];
  }

  comprobarMayorEdad() {
    let anyo = getAnyoNacimiento();
    if (2021 - anyo >= 18) {
      return true;
    }
    return false;
  }

  anyadirModulos(modulos) {
    for (let i = 0; i < modulos.length; i++) {
      this.modulos.push(modulos[i]);
    }
  }
}
