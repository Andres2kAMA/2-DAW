"use strict";

import * as borrarElementoPorDefecto from "./borrarElementosPorDefecto.js";
import * as tarea from "./tareas.js";
import * as mostrarTarea from "./mostrarTareas.js";
import * as comprobarTareas from "./comprobarTareas.js";
import * as devolverElementos from "./devolverElementos.js";

//Práctica 5.2 - Gestor de tareas 2

window.onload = function () {
  /**
   *Creo dos variables:
   *  ->La primera será un contador de las tareas añadidas
   *  ->La segunda sera una variable que almacenará el elemento arrastrado
   */
  var tareasAnyadidas;
  var elementoArrastrado;

  /**
   * Me traigo el primer h1 de la página, que lo utilizaré para:
   *  ->Darle estilo
   *  ->Insertar el error si el usuario inserta la tarea erróneamente
   */
  var primerParrafo = document.getElementsByTagName("h1")[0];
  primerParrafo.className = "colorBlanco";

  //Evento aplicado al botón añadir
  document.getElementById("add").addEventListener(
    "click",
    function () {
      if (tareasAnyadidas == undefined) {
        tareasAnyadidas = 0;
      } else {
        tareasAnyadidas++;
      }
      tarea.anyadirTarea(tareasAnyadidas);
    },
    false
  );

  //Evento aplicado al botón mostrar
  document.getElementById("sho").addEventListener(
    "click",
    function () {
      mostrarTarea.mostrarTareasOcultadas();
    },
    false
  );

  //Cuando empiezo a arrastrar un elemento, se almacena si está dentro del
  //contenedor de "pendientes" o "acabadas"
  document.addEventListener(
    "dragstart",
    function (ev) {
      if (
        ev.target.className == "tarea moverTarea" ||
        ev.target.className == "acabada"
      ) {
        elementoArrastrado = ev.target;
      }
    },
    false
  );

  document.addEventListener(
    "dragover",
    function (ev) {
      ev.preventDefault();
    },
    false
  );

  //Si el drop se hace en el contenedor "acabadas", ejecuto la función 'acabarTarea()'
  document.addEventListener(
    "drop",
    function (ev) {
      ev.preventDefault();
      if (ev.target.id == "acabadas") {
        tarea.acabarTarea(elementoArrastrado.getElementsByTagName("input")[0]);
      }
    },
    false
  );

  /**
   * Cuando el elemento arrastrado entre en un elemento:
   *  Le aplico al elemento:
   *    ->Un borde negro de 5px
   *    ->Una transparencia del 50%
   *
   *  Le aplico al elemento.target (siempre que se pueda poner estilo)
   *    ->Un fondo azul
   */
  document.addEventListener(
    "dragenter",
    function (ev) {
      elementoArrastrado.style.border = "5px solid black";
      elementoArrastrado.style.opacity = ".5";
      if (ev.target.style != undefined)
        ev.target.style.backgroundColor = "#21618C";
    },
    false
  );

  /**
   * Cuando el elemento arrastrado sale de un elemento:
   *  Le quito al elemento.target (siempre que se pueda poner estilo) el fondo
   */
  document.addEventListener(
    "dragleave",
    function (ev) {
      if (ev.target.style != undefined) ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Cuando acabo de arrastrar el elemento, elimino el fondo donde suelto el elemento arrastrado
   */
  document.addEventListener(
    "dragend",
    function (ev) {
      ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Cuando suelto el elemento
   *  Si está dentro del contenedor "pendientes"
   *    ->Ejecuto la función volverTarea()
   *  
      ->Le quito el borde al elemento arrastrado
      ->Le quito la transparencia al elemento arrastrado
   */
  document.addEventListener(
    "drop",
    function (ev) {
      ev.preventDefault();
      if (ev.target.id == "pendientes") {
        tarea.volverTarea(elementoArrastrado.getElementsByTagName("input")[0]);
      }
      elementoArrastrado.style.border = "";
      elementoArrastrado.style.opacity = "1";
      ev.target.style.backgroundColor = "";
    },
    false
  );

  /**
   * Reordeno las tareas dentro del contenedor "pendientes"
   */
  document.addEventListener(
    "drop",
    function (ev) {
      if (ev.target.tagName != "HTML") {
        //Siempre que esté dentro de pendientes
        if (
          (elementoArrastrado.classList[0] == "moverTarea" &&
            comprobarTareas.estaDentroPendientes(ev.target)) ||
          (elementoArrastrado.classList[1] == "moverTarea" &&
            comprobarTareas.estaDentroPendientes(ev.target))
        ) {
          //Selecciono al contenedor "pendientes"
          var divPadre = devolverElementos.devolverDivPendientes(ev.target);

          //Selecciono a la hermana
          var tareaHermana = devolverElementos.devolverTarea(ev.target);

          //Si tiene hermana entra al condicional
          if (tareaHermana != false) {
            //Si el elemento es mayor que la hermana mayor, inserta la tarea después que la hermana pequeña
            if (
              comprobarTareas.esHermanaMayor(
                elementoArrastrado,
                tareaHermana,
                divPadre.children
              )
            ) {
              tarea.insertAfter(elementoArrastrado, tareaHermana);
            } else {
              //Si no, la inserta antes
              divPadre.insertBefore(elementoArrastrado, tareaHermana);
            }
          } else {
            //Si el ev.target.tagName es un H1
            if (ev.target.tagName == "H1") {
              //Se inserta después del H1
              divPadre.insertBefore(elementoArrastrado, divPadre.children[1]);
            }
          }
        }
      }
    },
    false
  );
  borrarElementoPorDefecto.borrarElementosPorDefecto();
};
