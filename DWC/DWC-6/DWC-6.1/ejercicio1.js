"use strict";

window.onload = function () {
  //Le asigno al prototipo String la función repetir, que recibirá un número por parámetro-
  String.prototype.repetir = function (numero) {
    //Si el número es un tipo de dato válido entro en la condición-
    if (!isNaN(numero) && numero > 0) {
      //Me almaceno el body-
      let body = document.getElementById("body");

      //Mediante un bucle, creo párrafos mostrando el mensaje.
      for (let i = 0; i < numero; i++) {
        let p = document.createElement("p");
        p.innerHTML = this;
        body.appendChild(p);
      }
    } else {
      //Inserto un error
      let error = document.createElement("p");
      error.id = "error";
      error.innerHTML = "Tipo de dato erróneo";
      document
        .getElementById("header")
        .insertAdjacentElement("afterend", error);
    }
  };

  //Me creo la variable.
  let textoAMostrar = "¡PRAISE THE SUN!";

  //Indico que se repita 3 veces.
  textoAMostrar.repetir(3);
};
