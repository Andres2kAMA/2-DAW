<?php require('cabecera.php') ?>
<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario Login</title>
</head>

<body>
    <h1>Jugadores ordenados por puntos</h1>


    <?php
    require_once 'bd.php';

    $jugadores = obtener_jugadores_ordenados_partidos();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Partidos</th><th>Puntos</th><th>Rebotes</th><th>Asistencias</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["partidos"] .
                "</td><td>" . $jugador["puntos"] .
                "</td><td>" . $jugador["rebotes"] .
                "</td><td>" . $jugador["asistencias"] .
                "</td> </tr>";
        }
        echo "</table>";
    }
    ?>

    <?php require('footer.php') ?>
</body>

</html>