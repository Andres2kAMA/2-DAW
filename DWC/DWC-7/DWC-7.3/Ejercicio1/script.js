"use strict";

//Ejercicio 1 - Explotando una API con Fetch

window.onload = function () {
  var peticionDisney = new Request(
    "https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${userAccessToken}` },
    }
  );

  fetch(peticionDisney)
    .then((respuesta) => {
      if (respuesta.ok) {
        respuesta.text().then((datos) => {
          console.log(datos);
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};
