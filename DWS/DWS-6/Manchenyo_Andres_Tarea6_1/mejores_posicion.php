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

    <h3>Bases que dan más de 8 asistencias por partidos</h3>
    <?php $jugadores = cargar_bases_asistencias();
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
    ?>

    <h3>Escoltas o aleros que anotan más de 15 puntos por partido</h3>
    <?php $jugadores = cargar_escoltas_aleros_puntos();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Rebotes</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["puntos"] .
                "</td> </tr>";
        }
        echo "</table>";
    }
    ?>

    <h3>Ala pivots o pivots que cogen más de 7 rebotes por partido</h3>
    <?php $jugadores = cargar_pivots_rebotes();
    if ($jugadores === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<table><tr><th>Jugador</th><th>Posición</th><th>Puntos</th></tr>";
        foreach ($jugadores as $jugador) {
            echo "<tr><td>" . $jugador["nombre"] .
                "</td> <td>" . $jugador["posicion"] .
                "</td><td>" . $jugador["rebotes"] .
                "</td> </tr>";
        }
        echo "</table>";
    }

    require('footer.php') ?>
</body>

</html>