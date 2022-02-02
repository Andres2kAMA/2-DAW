<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mejores posicion</title>
</head>

<body>
    <?php require "bd.php" ?>
    <?php require "cabecera.php" ?>

    <h3>Listado de jugadores</h3>
    <?php $jugadores = cargar_todos_jugadores();
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
                "</td><td><a href='ficha.php?id=" . $jugador["id"] . "'>Ver ficha</a>" .
                "</td> </tr>";
        }
        echo "</table>";
    }

    require('footer.php') ?>
</body>

</html>