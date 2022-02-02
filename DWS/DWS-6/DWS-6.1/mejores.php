<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mejores</title>
</head>

<body>
    <?php require "bd.php" ?>
    <?php require "cabecera.php" ?>

    <h3>Jugadores con más de 12 puntos</h3>
    <?php $jugadores = cargar_jugadores_puntos();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Puntos</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["puntos"] .
                "</td> </tr>";
        }
        echo "</table>";
    }
    ?>

    <h3>Jugadores con más de 6 rebotes</h3>
    <?php $jugadores = cargar_jugadores_rebotes();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Rebotes</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["rebotes"] .
                "</td> </tr>";
        }
        echo "</table>";
    }
    ?>

    <h3>Jugadores con más de 5 asistencias</h3>
    <?php $jugadores = cargar_jugadores_asistencias();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Puntos</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["asistencias"] .
                "</td> </tr>";
        }
        echo "</table>";
    }

    require('footer.php') ?>
</body>

</html>