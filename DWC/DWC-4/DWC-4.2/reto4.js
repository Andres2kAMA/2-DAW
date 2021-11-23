"use strict";

//Ejercicio 4 - Componente Carrusel DOM

//Creo un array con las imágenes
var imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

//Selecciono el div donde voy a insertar las imágenes y le añado un ID
let divImg = document.getElementById("carruselImg");
divImg.id = "divImg";

//Creo una etiqieta img
let img = document.createElement("img");

//Creo un contador inicializado a 0 que servirá para saber que
//img mostrar
let contador = 0;

/**
 * Creo un intervalo que cada dos segundos va a mostrar una img
 */
setInterval(() => {
  //Selecciono la img a mostrar mediante el contrador
  img.src = imagenes[contador];

  //Añado la img al div
  divImg.appendChild(img);

  //Creo una especie de "contador", que indicará la posición de la fotografía inicializado a 0
  let posicionImg = 0;

  /**
   * Creo un intervalo que va a mover la imagen hasta el borde derecho de la página web
   */
  let moverImg = setInterval(() => {
    //Le indico la posición mediante el contador, que iré aumentando en 1 mientras dure el intervalo
    divImg.style.left = posicionImg + "%";
    posicionImg += 1;

    //Acabo el intervalo si la posición hacia la izquierda es igual a 100
    //Para que visualmente la imagen se mueva hacia la derecha hay que modificar la propiedad left
    if (divImg.style.left == "100%") {
      clearInterval(moverImg);
    }
  }, 18);

  //Aumento el valor del contador en 1
  contador++;

  //Si el contador ha llegado al límite del array 'imágenes',
  //establezco el valor del contador a
  if (contador > imagenes.length - 1) {
    contador = 0;
  }
}, 2000);
