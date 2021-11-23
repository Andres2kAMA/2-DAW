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

  getNotaMedia() {
    return this.notaMedia;
  }

  comprobarMayorEdad() {
    let anyo = this.fechaNacimiento.split("/")[2];
    if (2021 - anyo >= 18) {
      return true;
    }
    return false;
  }

  anyadirModulos(modulos) {
    let body = document.getElementById("body");
    if (modulos.length != undefined) {
      for (let i = 0; i < modulos.length; i++) {
        let p = document.createElement("p");
        if (modulos[i].constructor.name == "Modulos") {
          this.modulos.push(modulos[i]);
          p.innerHTML = `Modulo '${modulos[i].nombre}' añadido correctamente`;
          body.appendChild(p);
        }
      }
    } else {
      let p = document.createElement("p");
      if (modulos.constructor.name == "Modulos") {
        this.modulos.push(modulos);
        p.innerHTML = `Modulo '${modulos.nombre}' añadido correctamente`;
        body.appendChild(p);
      }
    }
  }
}
