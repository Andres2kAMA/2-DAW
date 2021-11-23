"use strict";

//Reto B - Juego mejor que tú

//Declaro todas las variables que voy a utilizar a lo largo del programa
var partidosJuan,
  partidosMiguel,
  partidosMaria,
  puntuacionesMedia,
  jugadoresIntroducidos,
  jugadores;

/**
 * Declaro que las siguientes variables van a ser arrays:
 *
 * Como ya tengo los resultado de los partidos, al mismo tiempo que declaro que dichas
 * variables(las 3 primeras) van a ser arrays, introduzco los datos.
 */
partidosJuan = new Array(89, 120, 103);
partidosMiguel = new Array(116, 94, 123);
partidosMaria = new Array(97, 134, 105);
puntuacionesMedia = new Array();
jugadoresIntroducidos = new Array();

//Esta variable servirá como un "contador"
jugadores = 0;

/**
 * Llamo al método 'calcularPuntuacionesMedia' con cada uno de los jugadores,
 * que calculará la puntuación media e introducirá en el array 'puntuacionesMedia'
 * la puntuacion calculada y en el array 'jugadoresIntroducidos' el nombre del jugador
 */

calcularPuntuacionesMedia(
  puntuacionesMedia,
  jugadoresIntroducidos,
  partidosJuan,
  "Juan"
);
jugadores++;

calcularPuntuacionesMedia(
  puntuacionesMedia,
  jugadoresIntroducidos,
  partidosMiguel,
  "Miguel"
);
jugadores++;

calcularPuntuacionesMedia(
  puntuacionesMedia,
  jugadoresIntroducidos,
  partidosMaria,
  "María"
);

//Muestro el ganador
mostrarGanador(puntuacionesMedia, jugadoresIntroducidos);

/**
 *
 * @param {int[]} partidos
 * @returns
 */
function calcularPuntuacionMedia(partidos) {
  let puntuacion = 0;
  for (const partido of partidos) {
    puntuacion += partido;
  }
  let puntuacionMedia = puntuacion / partidos.length;

  //Fijo la puntiación media a dos decimales
  return puntuacionMedia.toFixed(2);
}

/**
 *
 * @param {double[]} puntuacionesMedia
 * @param {string[]} jugadoresIndtroducidos
 * @param {int[]} partidos
 * @param {string} nombreJugador
 */
function calcularPuntuacionesMedia(
  puntuacionesMedia,
  jugadoresIntroducidos,
  partidos,
  nombreJugador
) {
  puntuacionesMedia.push(calcularPuntuacionMedia(partidos));
  jugadoresIntroducidos.push(nombreJugador);
}

/**
 *
 * @param {double[]} puntuacionesMedia
 * @param {string[]} jugadoresIntroducidos
 */
function mostrarGanador(puntuacionesMedia, jugadoresIntroducidos) {
  if (puntuacionesMedia.length == 3) {
    if (
      puntuacionesMedia[0] === puntuacionesMedia[1] &&
      puntuacionesMedia[0] === puntuacionesMedia[2]
    ) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          ", el equipo de " +
          jugadoresIntroducidos[1] +
          " y el equipo de " +
          jugadoresIntroducidos[2] +
          " empatan al obtener una media de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else if (puntuacionesMedia[0] === puntuacionesMedia[1]) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          " y el equipo de " +
          jugadoresIntroducidos[1] +
          " empatan al obtener una media de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else if (puntuacionesMedia[0] === puntuacionesMedia[2]) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          " y el equipo de " +
          jugadoresIntroducidos[2] +
          " empatan al obtener una media de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else if (puntuacionesMedia[1] === puntuacionesMedia[2]) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[1] +
          " y el equipo de " +
          jugadoresIntroducidos[2] +
          " empatan al obtener una media de " +
          puntuacionesMedia[1] +
          " puntos."
      );
    } else if (
      puntuacionesMedia[0] > puntuacionesMedia[1] &&
      puntuacionesMedia[0] > puntuacionesMedia[2]
    ) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          " es el equipo que mayor puntuacion media ha obtenido, con un total de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else if (
      puntuacionesMedia[1] > puntuacionesMedia[0] &&
      puntuacionesMedia[1] > puntuacionesMedia[2]
    ) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[1] +
          " es el equipo que mayor puntuacion media ha obtenido, con un total de " +
          puntuacionesMedia[1] +
          " puntos."
      );
    } else {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[2] +
          " es el equipo que mayor puntuacion media ha obtenido, con un total de " +
          puntuacionesMedia[2] +
          " puntos."
      );
    }
  } else {
    if (puntuacionesMedia[0] == puntuacionesMedia[1]) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          " y el equipo de " +
          jugadoresIntroducidos[1] +
          " empatan al obtener una media de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else if (puntuacionesMedia[0] > puntuacionesMedia[1]) {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[0] +
          " es el equipo que mayor puntuacion media ha obtenido, con un total de " +
          puntuacionesMedia[0] +
          " puntos."
      );
    } else {
      console.log(
        "El equipo de " +
          jugadoresIntroducidos[1] +
          " es el equipo que mayor puntuacion media ha obtenido, con un total de " +
          puntuacionesMedia[1] +
          " puntos."
      );
    }
  }
}
