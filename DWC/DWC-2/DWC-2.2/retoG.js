"use strict";

//Reto G - Recorriendo (objetos)

var alumnado = {
  id: 1,
  nombre: "Andrés",
  apellidos: "Mancheño Alcaraz",
  aficiones: ["Jugar", "Ver películas", "Senderismo"],
  notas: {
    primera: 8,
    segunda: 9,
    tercera: 9,
  },
  calcularMedia: function () {
    return (
      (this.notas.primera + this.notas.segunda + this.notas.tercera) /
      3
    ).toFixed(2);
  },
  imprimirAficiones: function () {
    let aficiones = "";
    for (let i = 0; i < this.aficiones.length; i++) {
      if (i == this.aficiones.length - 1) {
        aficiones += `'${this.aficiones[i]}'`;
      } else {
        aficiones += `'${this.aficiones[i]}', `;
      }
    }
    return aficiones;
  },
  imprimirInforme: function () {
    console.log(
      `El alumno ${this.nombre} ${this.apellidos} con ID: ${
        this.id
      } tiene las siguientes aficiones: ${this.imprimirAficiones()}.Además, ha obtenido en la primera evaluación un ${
        this.notas.primera
      }, en la segunda un ${this.notas.segunda} y en la tercena un ${
        this.notas.tercera
      }, que da una media de ${this.calcularMedia()}. `
    );
  },
};

alumnado.imprimirAficiones();
alumnado.imprimirInforme();
