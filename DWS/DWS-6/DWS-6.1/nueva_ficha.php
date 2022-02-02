<?php
require('cabecera.php');

require_once 'bd.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $posicion = $_POST["posicion"];
    $partidos = $_POST["partidos"];
    if ($partidos < 0 || $partidos == null) {
        $partidos = 0;
    }
    $puntos = $_POST["puntos"];
    if ($puntos < 0 || $puntos == null) {
        $puntos = 0;
    }
    $rebotes = $_POST["rebotes"];
    if ($rebotes < 0 || $rebotes == null) {
        $rebotes = 0;
    }
    $asistencias = $_POST["asistencias"];
    if ($asistencias < 0 || $asistencias == null) {
        $asistencias = 0;
    }

    anadir_jugador($nombre, $posicion, $partidos, $puntos, $rebotes, $asistencias);
    header("Location: jugadores.php");
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario añadir</title>
</head>

<body>
    <h1>Añadir jugador</h1>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" value=""><br><br>
        <label for="posicion">Posición</label>
        <input id="posicion" name="posicion" type="text" value=""><br><br>
        <label for="partidos">Partidos</label>
        <input id="partidos" name="partidos" type="number" value="0"><br><br>
        <label for="puntos">Puntos</label>
        <input id="puntos" name="puntos" type="number" value="0"><br><br>
        <label for="rebotes">Rebotes</label>
        <input id="rebotes" name="rebotes" type="number" value="0"><br><br>
        <label for="asistencias">Asistencias</label>
        <input id="asistencias" name="asistencias" type="number" value="0"><br><br>
        <input type="submit">
    </form>
    <?php require('footer.php') ?>
</body>

</html>