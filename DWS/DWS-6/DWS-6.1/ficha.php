<?php
require('bd.php');
require('cabecera.php');

if (isset($_GET['id'])) {
    $datos = obtener_jugador($_GET['id']);
    if ($datos === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table class='ficha'><tr><th>Jugador</th><th>Posición</th><th>Partidos</th><th>Puntos</th><th>Rebotes</th><th>Asistencias</th></tr>";
        foreach ($datos as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["partidos"] .
                "</td><td>" . $jugador["puntos"] .
                "</td><td>" . $jugador["rebotes"] .
                "</td><td>" . $jugador["asistencias"] .
                "</td><td><a href='actualizar_ficha.php?id=" . $jugador["id"] . "'>Modificar datos</a>" .
                "</td><td><a href='borrar_ficha.php?id=" . $jugador["id"] . "'>Eliminar jugador</a>" .
                "</td> </tr>";
        }
        echo "</table>";
    }
}
require('footer.php');
