/**
 * Muestro todas las tareas
 */
function mostrarTareasOcultadas() {
  let divAcabadas = document.getElementById("acabadas");

  let tareasAcabadas = divAcabadas.getElementsByTagName("div");

  for (let i = 0; i < tareasAcabadas.length; i++) {
    tareasAcabadas[i].className = "acabada";
  }
}

export { mostrarTareasOcultadas };
